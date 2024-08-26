"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { IcGameTime } from "../../../../public/icons";
import { SelectItem } from "@nextui-org/react";
import { Input, Select } from "@/components";

const GameCreationForm = () => {
  const [formData, setFormData] = useState({});

  const network: any[] = [
    {
      // icon: <Image src={IcLanguageVN} width={20} height={20} alt="language" />,
      value: "Binance Smart Chain",
    },
  ];

  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  }, []);

  return (
    <div className="mb-8 mt-4 flex flex-col gap-4">
      <div className={`flex gap-2`}>
        <Input
          className="flex-1"
          label="Hello"
          placeholder="Hello"
          startContent={
            <Image src={IcGameTime} width={20} height={20} alt="user" />
          }
          value=""
          // onChange={(e) => {
          //   handleChange("firstName", e.target.value);
          // }}
        />
      </div>
      <div className="">
        <div className="app-text-body-1 text-white">Hello</div>
        <div className="flex w-full items-end gap-2">
          <Select
            defaultSelectedKeys={["abc"]}
            items={network}
            isOpen={false}
            onSelectionChange={(keys) => {
              handleChange("phonePrefix", keys as string);
            }}
            classNames={{
              label: "hidden",
              selectorIcon: "hidden",
              trigger:
                "justify-start cursor-default group-data-[focus=true]:border-primary",
            }}
            // renderValue={() => (
            //   <div className="flex items-center gap-2">
            //     <Image
            //       src={IcLanguageVN}
            //       width={20}
            //       height={20}
            //       alt="language"
            //     />
            //     <div className="app-text-body-1">{formData.phonePrefix}</div>
            //   </div>
            // )}
          >
            {(item) => (
              <SelectItem key={item.value} textValue={item.value}>
                <div className="flex items-center gap-[2px]">
                  {/* {item.icon} */}
                  <div className="app-text-body-1">{item.value}</div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default GameCreationForm;
