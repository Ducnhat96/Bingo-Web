import React, { FC } from "react";
import Image from "next/image";
import { addressShorten, SWK_ADDRESS } from "../../utils";
import { IcSWK } from "../../public/icons";

const PrizeToken: FC = () => {
  return (
    <div className="app-text-body-large bg-mono-secondary flex w-auto flex-row items-center justify-start gap-2 rounded-2xl px-4 py-3">
      <Image
        loading="lazy"
        src={IcSWK}
        alt="user"
        width={24}
        height={24}
        className="rounded-full"
      />
      <span>SWK</span>
      <span className="text-mono-alternate">
        ({addressShorten(SWK_ADDRESS)})
      </span>
    </div>
  );
};

export default PrizeToken;
