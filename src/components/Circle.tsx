import Image from "next/image";
import React from "react";

type CircleProps = {
  isShow?: boolean;
  img?: string | null;
  size?: number;
};

const Circle: React.FC<CircleProps> = ({ isShow = false, img, size = 80 }) => {
  return (
    <div
      className="flex w-full gap-2 rounded-full bg-mono-alternate shadow-number"
      style={{
        width: size,
        height: size,
      }}
    >
      {isShow && img && (
        <Image src={img} alt="number" width={200} height={200} />
      )}
    </div>
  );
};

export default Circle;
