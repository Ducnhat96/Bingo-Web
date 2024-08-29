"use client";

import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { PlayerCardHorizontal, RewardValue } from "@/components";

type Player = {
  id: string;
  img: string;
  name: string;
  address: string;
};

const columnHelper = createColumnHelper<Player>();

const ListOfLeaderBoard = ({
  players,
  avatarSize,
  hideRewardIcon,
  headerBlackList = [],
}: {
  players: Player[];
  avatarSize?: number;
  hideRewardIcon?: boolean;
  headerBlackList?: string[];
}) => {
  const columns = [
    columnHelper.accessor("id", {
      header: () =>
        headerBlackList.includes("id") ? null : (
          <div className="text-center">Rank</div>
        ),
      cell: (info) => (
        <div className="app-text-body-medium text-center">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("name", {
      header: () =>
        headerBlackList.includes("name") ? null : (
          <div className="text-start">Players</div>
        ),
      cell: (info) => (
        <div className="flex items-start justify-start">
          <PlayerCardHorizontal
            avatarUrl={info.row.original.img}
            name={info.getValue()}
            address={"0xB7d550FA8A29667c6Be4bFD56a867a67e7c8A56f"}
            imgSize={avatarSize}
          />
        </div>
      ),
    }),
    columnHelper.accessor("address", {
      header: () =>
        headerBlackList.includes("address") ? null : (
          <div className="pr-4 text-end">Reward</div>
        ),
      cell: (info) => (
        <div className="flex items-start justify-start">
          <RewardValue amount={100} hideRewardIcon={hideRewardIcon} />
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: players,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="yellow-500 w-full table-auto p-2">
      <thead className="border-b border-accent">
        {table.getHeaderGroups().map((headerGroup: any) => (
          <tr
            key={headerGroup.id}
            className="app-text-label-medium text-mono-alternate"
          >
            {headerGroup.headers.map((header: any) => (
              <th key={header.id} className="px-4 py-2">
                {header.isPlaceholder
                  ? null
                  : flexRender(
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
            className={` ${rowIndex !== table.getRowModel().rows.length - 1 ? "border-b border-accent" : ""} w-full p-2 transition-all duration-200`}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="text-start">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListOfLeaderBoard;
