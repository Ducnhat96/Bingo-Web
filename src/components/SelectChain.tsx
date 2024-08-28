import { Select, SelectItem, type SelectedItems } from "@nextui-org/react";
import React, { type FC } from "react";
import Image from "next/image";
import { ChainType } from "../../utils/chains";

interface SelectChainProps {
  chains: ChainType[];
  currentChain: any;
  setCurrentChain: (currentChain: any) => void;
}

const SelectNetwork: FC<SelectChainProps> = ({
  chains,
  currentChain,
  setCurrentChain,
}) => {
  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <Select
        items={chains}
        variant="bordered"
        multiple={false}
        size="lg"
        aria-label="Select network"
        placeholder="Select network"
        selectedKeys={currentChain}
        onSelectionChange={setCurrentChain}
        classNames={{
          base: "min-w-[400px]",
          trigger: "w-full flex items-center justify-between",
          listboxWrapper: "bg-mono-primary rounded-xl border",
          innerWrapper: "w-full flex items-center justify-between",
          selectorIcon: "absolute right-4",
        }}
        renderValue={(items: SelectedItems<ChainType>) => {
          return items.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex flex-row items-center gap-2 p-1">
                <Image
                  src={item?.data?.image_path as string}
                  alt="chain"
                  width={24}
                  height={24}
                />
                <p className="rowdies-regular">{item?.data?.name}</p>
              </div>
            </div>
          ));
        }}
      >
        {(chain) => (
          <SelectItem
            key={String(chain.id)}
            textValue={chain.name}
            className="flex flex-row"
          >
            <div className="flex flex-row items-center justify-start gap-2 px-1 py-2">
              <Image
                src={chain.image_path}
                alt="chain"
                width={24}
                height={24}
              />
              <p className="rowdies-regular">{chain.name}</p>
            </div>
          </SelectItem>
        )}
      </Select>
    </div>
  );
};

export default SelectNetwork;
