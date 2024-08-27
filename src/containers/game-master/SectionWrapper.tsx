"use client";
import clsx from "clsx";
import React, { ReactNode, type FC } from "react";

const SectionWrapper: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative flex h-full w-full items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
