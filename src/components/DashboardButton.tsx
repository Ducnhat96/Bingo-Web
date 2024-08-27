import React from "react";
import Image from "next/image";
import clsx from "clsx";

const DashboardButton = ({
  title,
  icon,
  iconAlt,
  containerClasses,
  onClick,
}: {
  title: string;
  icon?: string;
  iconAlt?: string;
  containerClasses?: string;
  onClick?: () => any;
}) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 rounded-3xl bg-primary px-4 py-2",
        containerClasses
      )}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={iconAlt || ""} />}
      <p className="app-text-title-medium text-white">{title}</p>
    </button>
  );
};

export default DashboardButton;
