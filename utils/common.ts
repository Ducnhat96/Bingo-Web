export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;
export const MULTI_AVATAR_KEY = process.env.NEXT_PUBLIC_MULTI_AVATAR_KEY;

export const getAvatarByWalletAddress = (walletAddress?: string): string => {
  if (!walletAddress) return "";
  return `https://api.multiavatar.com/${walletAddress?.toLowerCase()}.png?apikey=${MULTI_AVATAR_KEY}`;
};

export const addressShorten: any = (address: string, num: number) => {
  if (!address) return "";
  if (!num) num = 6;
  if (num >= address.length / 2) return address;
  const prefix = address?.slice(0, num);
  const suffix = address?.slice(-num, address.length);
  return `${prefix}···${suffix}`;
};
