"use client";

import {
  type SelectProps as NextUISelectProps,
  Select as NextUISelect,
} from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { IcSelectArrowDown } from "../../public/icons";

interface SelectProps<T extends object> extends NextUISelectProps<T> {}

const Select = <T extends object>({
  label,
  classNames,
  children,
  ...props
}: SelectProps<T>): React.JSX.Element => {
  return (
    <div className="space-y-2">
      <div className={clsx("app-text-body-1 text-white", classNames?.label)}>
        {label}
      </div>
      <NextUISelect<T>
        label=""
        variant="bordered"
        classNames={{
          ...classNames,
          mainWrapper: clsx(
            "data-[hover=true]:shadow-2 group-data-[focus=true]:border-image-[linear-gradient(263.92deg,_#C1E988_0%,_#71A504_100%)]",
            classNames?.mainWrapper
          ),
          trigger: clsx(
            "h-12 w-[120px] py-3 px-4 rounded-[14px] border-mute bg-white border",
            classNames?.trigger
          ),
          innerWrapper: clsx("app-text-body-1", classNames?.innerWrapper),
          selectorIcon: clsx("w-5 h-5", classNames?.selectorIcon),
        }}
        selectionMode="single"
        selectorIcon={
          <Image src={IcSelectArrowDown} width={20} height={20} alt="arrow" />
        }
        {...props}
      >
        {children}
      </NextUISelect>
    </div>
  );
};

export default Select;
