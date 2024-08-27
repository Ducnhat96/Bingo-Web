import React, { type FC } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { chainList } from "../../utils/chains";
import Image from "next/image";

const ChainListDropdown: FC = () => {
  return (
    <Popover>
      <PopoverButton className="flex items-center justify-center gap-0 outline-none">
        Icon
      </PopoverButton>
      <PopoverPanel
        translate="yes"
        anchor={{
          to: "bottom end",
          gap: "4px",
        }}
        className="relative z-50 rounded-xl border border-default bg-white p-4 transition ease-in-out [--anchor-gap:var(--spacing-5)] data-[leave]:data-[closed]:translate-y-4 data-[enter]:opacity-100 data-[leave]:data-[closed]:opacity-0 data-[enter]:duration-400 data-[leave]:duration-300"
      >
        {({ close }) => (
          <div className="flex flex-col gap-4">
            {chainList.map((chain, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-row items-center justify-start gap-2"
                >
                  <div key={idx}>
                    <Image
                      src={chain.image_path}
                      alt={chain.name}
                      width={32}
                      height={32}
                    />
                  </div>
                  <p className="text-base xl:text-lg">{chain.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </PopoverPanel>
    </Popover>
  );
};

export default ChainListDropdown;
