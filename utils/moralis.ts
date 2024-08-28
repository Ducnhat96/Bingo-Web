import axios from "axios";

export const MoralisApiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
export const MoralisBaseURL = process.env.NEXT_PUBLIC_MORALIS_BASE_URL;

export const moralisInstance = axios.create({
  baseURL: MoralisBaseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-API-Key": MoralisApiKey,
  },
});

const getNFTInfoFromMoralis = async (
  chainId: number,
  contractAddress: string,
  tokenID: string
): Promise<any> => {
  try {
    if (chainId) {
      const hexChain = "0x" + (chainId?.toString(16) ?? "");
      const params: any = {
        chain: hexChain,
        format: "decimal",
        normalizeMetadata: "true",
        media_items: "true",
      };
      const query = new URLSearchParams(params).toString();
      const url = `/nft/${contractAddress}/${tokenID}?${query}`;
      const response = await moralisInstance.get(url);
      const nftInfo = response?.data;
      return nftInfo;
    }
  } catch (e: any) {
    console.log(e?.message);
  }
};

export { getNFTInfoFromMoralis };
