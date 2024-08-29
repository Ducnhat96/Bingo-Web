import React from "react";
import Image from "next/image";
import { BgCountDownTime } from "../../public/images";
import clsx from "clsx";

const CountDownBoard = ({
  children,
  containerClasses,
  boardClasses,
}: {
  children: React.ReactNode;
  containerClasses?: string;
  boardClasses?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex h-auto w-full items-start justify-center",
        containerClasses
      )}
    >
      <Image
        src={BgCountDownTime}
        alt="countdown"
        className={clsx("w-full", boardClasses)}
        priority
      />
      {children}
    </div>
  );
};

export default CountDownBoard;
