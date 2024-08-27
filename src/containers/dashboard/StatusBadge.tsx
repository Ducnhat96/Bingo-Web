import clsx from "clsx";
import React from "react";

export enum EGameStatus {
  AWAIT = "await",
  AWAIT_DISTRIBUTE = "await-distribute",
  FINISHED = "finished",
}

const StatusBadge = ({
  text,
  colorScheme,
}: {
  text: string;
  colorScheme: EGameStatus;
}) => {
  let textClasses = "";

  switch (colorScheme) {
    case EGameStatus.AWAIT:
      textClasses = "bg-primary25 text-primary";
      break;
    case EGameStatus.AWAIT_DISTRIBUTE:
      textClasses = "bg-warning25 text-warning";
      break;
    default:
      textClasses = "bg-[#F1F3EC] text-[#C0C2BA]";
  }

  return (
    <div
      className={clsx(
        "app-text-label-medium rounded-2xl px-3 py-1 w-fit h-fit",
        textClasses
      )}
    >
      {text}
    </div>
  );
};

export default StatusBadge;
