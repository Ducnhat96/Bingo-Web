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

const getOrdinalSuffix = (number: number) => {
  const j = number % 10;
  const k = number % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
};

export const getRewardNameByIndex = (index: number) => {
  const number = index + 1; // Convert index to 1-based
  const suffix = getOrdinalSuffix(number);
  return `${number}${suffix}`;
};
