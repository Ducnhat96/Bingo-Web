"use client";

import React from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { addressShorten } from "../../../../utils";
import {
  IcGameEdit,
  IcGameInfo,
  IcGameNft,
  IcGamePlayer,
  IcGameReward,
  IcGameTime,
  IcGameTrash,
} from "../../../../public/icons";
import StatusBadge, { EGameStatus } from "./StatusBadge";

type Game = {
  id: number;
  title: string;
  nftRequirement: {
    title: string;
    image: string;
    address: string;
  };
  beginTime: string;
  totalPlayers: number;
  totalRewards: string;
  status: string;
  colorScheme: EGameStatus;
};

const columnHelper = createColumnHelper<Game>();

export default function BingoList({ games }: { games: Game[] }) {
  const columns = [
    columnHelper.accessor("title", {
      header: () => <div className="text-left">Game Title</div>,
      cell: (info) => (
        <div className="app-text-body-large text-left">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor("nftRequirement", {
      header: () => (
        <div className="flex gap-2 text-left">
          <Image src={IcGameNft} alt="" />
          <div>NFT Requirement</div>
        </div>
      ),
      cell: (info) => (
        <div className="flex items-center gap-3">
          <div className="h-full max-h-[50px] w-full max-w-[50px]">
            <Image
              src={info.getValue().image}
              alt="img"
              className="h-full rounded-[8px] object-cover"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p
              className="app-text-body-medium"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "200px",
              }}
            >
              {info.getValue().title}
            </p>
            <p className="app-text-label-medium text-alternate text-left">
              {addressShorten(info.getValue().address)}
            </p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("beginTime", {
      header: () => (
        <div className="flex gap-2 text-left">
          <Image src={IcGameTime} alt="" />
          <div>Begin Time</div>
        </div>
      ),
      cell: (info) => (
        <div className="app-text-body-large max-w-[120px] text-secondary">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("totalPlayers", {
      header: () => (
        <div className="flex gap-2 text-left">
          <Image src={IcGamePlayer} alt="" />
          <div>Total Players</div>
        </div>
      ),
      cell: (info) => (
        <div className="app-text-body-large text-secondary">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("totalRewards", {
      header: () => (
        <div className="flex gap-2 text-left">
          <Image src={IcGameReward} alt="" />
          <div>Total Rewards</div>
        </div>
      ),
      cell: (info) => (
        <div className="app-text-body-large text-primary">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => (
        <div className="flex items-center justify-center">
          <StatusBadge
          text={info.getValue()}
          colorScheme={info.row.original.colorScheme}
        />
        </div>
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "",
      cell: ({ row }) => {
        const id = row.original.id;
        return (
          <div className="flex items-center gap-3">
            <Image src={IcGameInfo} alt="info" className="cursor-pointer" />
            <Image src={IcGameEdit} alt="edit" className="cursor-pointer" />
            <Image src={IcGameTrash} alt="trash" className="cursor-pointer" />
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: games,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="mt-[30px] w-full table-auto border-collapse">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="app-text-label-medium text-alternate"
          >
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="px-4 py-2">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, rowIndex) => (
          <tr
            key={row.id}
            className={` ${rowIndex !== table.getRowModel().rows.length - 1 ? "border-b border-gray-200" : ""} transition-all duration-200 hover:rounded-3xl hover:border-none hover:shadow-lg`}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-8 text-center">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
