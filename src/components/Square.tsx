import React, { ReactNode } from "react";

type SquareProps = {
  isLight: boolean;
  children?: ReactNode;
};

const Square: React.FC<SquareProps> = ({ isLight, children }) => {
  return (
    <div
      className={`flex flex-1 shrink basis-0 flex-col items-center justify-center px-2 py-4 ${isLight ? "bg-mono-primary" : "bg-table"}`}
    >
      {children}
    </div>
  );
};

export default Square;
