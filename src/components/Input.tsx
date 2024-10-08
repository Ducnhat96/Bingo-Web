import {
  type InputProps as NextUIInputProps,
  Input as NextUIInput,
} from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

interface InputProps extends NextUIInputProps {
  customCounter?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  classNames,
  customCounter,
  ...props
}) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-4">
        <div className={clsx("app-text-body-1", classNames?.label)}>
          {label}
        </div>
        {customCounter}
      </div>
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
