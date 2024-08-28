export interface ChainType {
  id: number;
  name: string;
  image_path: string;
}

const chainList: ChainType[] = [
  {
    id: 56,
    name: "Binance Smart Chain",
    image_path: "/chains/bsc.svg",
  },
  {
    id: 137,
    name: "Polygon (Matic)",
    image_path: "/chains/matic.svg",
  },
];

export { chainList };
