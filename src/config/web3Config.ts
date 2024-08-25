import { http, createConfig } from 'wagmi'
import { arbitrum, bsc, Chain, evmos, mainnet, okc, optimism, polygon, sepolia } from 'wagmi/chains'

const supportedChains: readonly [Chain, ...Chain[]] = [
  mainnet,
  polygon,
  optimism,
  arbitrum,
  bsc,
  evmos,
  okc,
  sepolia
]


export const web3Config = createConfig({
  chains: supportedChains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
