import { SVGProps } from "react";
import { chainList } from "../../utils/chains";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface PrizeType {
  name: string;
  description?: string;
  quantity: number;
  amount: number;
}

export interface CreateGameParams {
  title: string;
  start_at: string | null;
  chain_id: number;
  prize_token_address: string;
  nft_token_address: string;
  nft_token_id?: string;
  prizes: PrizeType[];
}

export interface GameDataType {
  gameTitle: string;
  beginTime: string;
  beginDate: Date;
  network: Set<string>;
  prizeToken: string;
  nftContractAddress: string;
}

export const initGameData = {
  gameTitle: "",
  beginTime: "",
  beginDate: new Date(),
  network: new Set([String(chainList[0].id)]),
  prizeToken: "",
  nftContractAddress: "",
};

export interface RewardType {
  name: string;
  description?: string;
  quantity: number;
  amount: number;
}
