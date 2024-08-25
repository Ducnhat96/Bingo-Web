'use client'
import ConnectWallet from '@/components/connect-wallet'
import Image from 'next/image'
import { ImgHomeHero } from '../../public/images'

export default function Home() {

  return (
    <div className="flex flex-col gap-5 h-screen w-screen items-center justify-center">
      <Image
        src={ImgHomeHero}
        alt="bg-game"
        className="z-10 w-[90vw] md:w-[70vw] lg:w-[50vw]"
        objectFit="contain"
      />
      <ConnectWallet />
    </div>
  );
}
