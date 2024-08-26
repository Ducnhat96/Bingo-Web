import {
  type InputProps as NextUIInputProps,
  Input as NextUIInput,
} from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

interface InputProps extends NextUIInputProps {}

const Input: React.FC<InputProps> = ({
  label,
  classNames,
  ...props
}) => {
  return (
    <div className="space-y-2 w-full">
      <div className="app-text-body-1 text-white">{label}</div>
      <NextUIInput
        label=""
        variant="bordered"
        classNames={{
          ...classNames,
          inputWrapper: clsx(
            "rounded-[14px] border-mute h-12 bg-white border py-3 px-4 group-data-[focus=true]:border-primary",
            classNames?.inputWrapper
          ),
          input: clsx(
            "app-text-body-1r placeholder:text-middle data-[has-start-content=true]:ps-2",
            classNames?.input
          ),
          errorMessage: clsx(
            "absolute top-[2px] right-0 text-dangerous app-text-body-2",
            classNames?.errorMessage
          ),
          helperWrapper: clsx("p-0", classNames?.helperWrapper),
        }}
        css={{
          "&:focus-visible": {
            outline: "none",
            borderColor: "currentColor",
            boxShadow: "none",
          },
        }}
        {...props}
      />
    </div>
  );
};

export default Input;
