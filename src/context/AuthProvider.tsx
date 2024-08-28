"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { injected } from "wagmi/connectors";
import {
  Connector,
  useAccount,
  useConnect,
  useConnectors,
  useDisconnect,
  useSignMessage,
} from "wagmi";
import { generateNonce, SiweMessage } from "siwe";

import { loginApi } from "@/apis";
import usePersistState from "@/hooks/usePersistState";
import { StorageKey } from "../../utils";
import { toast } from "sonner";

interface Auth {
  authToken: string | null;
  connectWallet: (connector?: Connector) => void;
  disconnectWallet: () => void;
}

interface AuthProviderProps {
  children?: React.ReactNode;
}

interface AuthToken {
  token: string | null;
  address: `0x${string}` | undefined;
}

const initialAuthToken: AuthToken = {
  token: null,
  address: undefined,
};

const AuthContext = createContext<Auth>({
  authToken: null,
  connectWallet: (connector?: Connector) => {},
  disconnectWallet: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps): any => {
  const [authToken, setAuthToken] = usePersistState(
    StorageKey.AuthToken,
    initialAuthToken
  );

  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const connectors = useConnectors();

  const [mounted, setMounted] = useState(false);

  const loginRef = useRef<boolean>(false);

  const connectWallet = async () => {
    const isAvacus = window.ethereum?.isAvacus;
    const isMetaMask = window.ethereum?.isMetaMask;
    if (!isAvacus && !isMetaMask) {
      window.open(
        "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
      );
      return;
    }
    const connector = isAvacus
      ? injected()
      : connectors.find((connector) => connector.id === "io.metamask");
    setAuthToken(initialAuthToken);
    connect({ connector: connector ?? injected() });
  };

  const disconnectWallet = async () => {
    loginRef.current = false;
    disconnect();
    setAuthToken(initialAuthToken);
  };

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (address && authToken?.address && authToken.address !== address) {
      setAuthToken(initialAuthToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (!mounted || loginRef.current || !address || !chainId) return;
    if (authToken?.token && authToken?.address === address) return;

    (async () => {
      const nonce = generateNonce();
      const issuedAt = new Date().toISOString();
      loginRef.current = true;

      const message = new SiweMessage({
        domain: "deBingo",
        address,
        statement: "I accept the deBingo Terms of Service",
        uri: "https://debingo.defi/login",
        version: "1",
        chainId,
        nonce,
        issuedAt,
      });
      await signMessageAsync(
        {
          message: message.prepareMessage(),
        },
        {
          onSuccess: async function (data) {
            try {
              const resLogin: any = await loginApi({
                signer: address,
                signature: data,
                nonce,
                version: "1",
                issued_at: issuedAt,
                chain_id: chainId,
              });
              setAuthToken({
                token: resLogin.token,
                address,
              });
              loginRef.current = false;
            } catch (error: any) {
              toast.error(error.message);
              disconnectWallet();
            }
          },
          onError(error: any) {
            toast.error(error.message);
            disconnectWallet();
          },
        }
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chainId, mounted, disconnect, signMessageAsync]);

  return (
    <AuthContext.Provider
      value={{
        authToken: authToken?.token,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): Auth => useContext<Auth>(AuthContext);
