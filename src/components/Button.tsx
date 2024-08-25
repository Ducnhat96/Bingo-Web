import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@nextui-org/react";
import clsx from "clsx";

const ButtonCommon: React.FC<
  {
    title: string;
    titleClass?: string;
    btnClass?: string;
  } & ButtonProps
> = ({ title, titleClass = "text-white", btnClass, ...rest }) => {
  return (
    <Button
      {...rest}
      className={clsx(
        "flex min-h-[75px] max-w-full flex-col items-center justify-center self-stretch overflow-hidden whitespace-nowrap rounded-3xl border-4 border-solid border-white px-6 py-3 tracking-normal shadow-button outline-none",
        btnClass
      )}
    >
      <p className={clsx("app-text-title-medium", titleClass)}>{title}</p>
    </Button>
  );
};

export default ButtonCommon;
