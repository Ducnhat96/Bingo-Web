"use client";

import { Input } from "@/components";
import React from "react";
import Image from "next/image";
import { IcSearch } from "../../../../public/icons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { addressShorten } from "../../../../utils";

type Player = {
  id: string;
  img: string;
  name: string;
  address: string;
};

const columnHelper = createColumnHelper<Player>();

const ListOfPlayers = ({ players }: { players: Player[] }) => {
  const columns = [
    columnHelper.accessor("id", {
      header: "",
      cell: (info) => (
        <div className="app-text-body-medium text-left">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor("name", {
      header: () => <div className="text-left">Players</div>,
      cell: (info) => (
        <div className="flex items-center gap-3">
          <Image
            src={info.row.original.img}
            alt="img"
            className="h-full rounded-[8px] object-cover"
            width={50}
            height={50}
          />
          <div className="app-text-title-medium max-w-[120px]">
            {info.getValue()}
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("address", {
      header: () => <div className="text-right">Address</div>,
      cell: (info) => (
        <div className="app-text-body-large text-secondary text-right">
          {addressShorten(info.getValue())}
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
    <>
      <div className="mb-4 flex w-full items-end gap-4">
        <h1 className="app-text-headline-small">List Of Players</h1>
        <p className="app-text-label-large text-mono-alternate">
          Total: <span className="app-text-body-large text-secondary">213</span>
        </p>
      </div>
      <Input
        className="flex-1"
        placeholder="Search player's name or address"
        // value={}
        // onChange={(e) => {
        //   handleChange("", e.target.value);
        // }}
        startContent={<Image src={IcSearch} alt="search icon" />}
      />
      <table className="mt-[30px] w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr
              key={headerGroup.id}
              className="app-text-label-medium text-mono-alternate"
            >
              {headerGroup.headers.map((header: any) => (
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
              className={` ${rowIndex !== table.getRowModel().rows.length - 1 ? "border-b border-gray-200" : ""} transition-all duration-200`}
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
    </>
  );
};

export default ListOfPlayers;
