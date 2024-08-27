"use client";

import { Input, Select } from "@/components";
import Modal from "react-modal";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import {
  IcGameCreateCalendar,
  IcGameCreateNft,
  IcGameTime,
} from "../../../../public/icons";
import { SelectItem } from "@nextui-org/react";
import { DatePickerModal, TimePickerModal } from "@/components/DateTimePicker";

// Set the app element for accessibility
Modal.setAppElement("#dashboard_container");

export const initGameData = {
  gameTitle: "",
  beginTime: "",
  beginDate: new Date(),
  network: "",
  prizeToken: "",
  nftContractAddress: "",
};

const GameCreationForm = () => {
  const [formData, setFormData] = useState(initGameData);
  const [isTimeModalVisible, setTimeModalVisible] = useState(false);
  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const timeInputRef = useRef<HTMLDivElement>(null);
  const dateInputRef = useRef<HTMLDivElement>(null);

  const GAME_TITLE_MAX_CHAR = 50;

  const networks: any[] = [
    {
      value: "Binance Smart Chain",
    },
  ];

  const handleChange = useCallback((field: string, value: string) => {
    if (field === "gameTitle" && value.length > GAME_TITLE_MAX_CHAR) {
      return;
    }

    setFormData((prevData) => ({ ...prevData, [field]: value }));
  }, []);

  const openTimeModal = () => setTimeModalVisible(true);
  const closeTimeModal = () => setTimeModalVisible(false);
  const openDateModal = () => setDateModalVisible(true);
  const closeDateModal = () => setDateModalVisible(false);

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
    setFormData((prevData) => ({
      ...prevData,
      ["beginTime"]: value,
    }));
    closeTimeModal();
  };

  const handleDateChange = (date: Date | null) => {
    if (!date) {
      return;
    }
    setStartDate(date);
    setFormData((prevData) => ({
      ...prevData,
      ["beginDate"]: date,
    }));
    closeDateModal();
  };

  return (
    <div className="my-8 flex flex-col gap-6">
      <div className="flex gap-2">
        <Input
          className="flex-1"
          label="Game Title"
          placeholder="Input game title"
          value={formData.gameTitle}
          onChange={(e) => {
            handleChange("gameTitle", e.target.value);
          }}
          customCounter={
            <div className="app-text-body-medium text-mono-alternate">
              {formData.gameTitle.trim().length}/{GAME_TITLE_MAX_CHAR}{" "}
              characters
            </div>
          }
        />
      </div>
      <div className="flex flex-col">
        <div className="app-text-body-1">Begin time</div>
        <div className="flex items-center gap-6">
          <div ref={timeInputRef} className="flex-1" onClick={openTimeModal}>
            <Input
              placeholder="Choose Time"
              value={selectedTime}
              startContent={
                <Image
                  src={IcGameTime}
                  width={24}
                  height={24}
                  alt="game time icon"
                />
              }
              readOnly
            />
          </div>
          <div ref={dateInputRef} className="flex-1" onClick={openDateModal}>
            <Input
              placeholder="MM / DD / YYYY"
              value={startDate ? startDate.toLocaleDateString() : ""}
              readOnly
              startContent={
                <Image
                  src={IcGameCreateCalendar}
                  width={20}
                  height={20}
                  alt="game calendar icon"
                />
              }
            />
          </div>
        </div>
      </div>

      <TimePickerModal
        isOpen={isTimeModalVisible}
        onClose={closeTimeModal}
        timeInputRef={timeInputRef}
        onTimeChange={handleTimeChange}
      />

      <DatePickerModal
        isOpen={isDateModalVisible}
        onClose={closeDateModal}
        dateInputRef={dateInputRef}
        startDate={startDate}
        onDateChange={handleDateChange}
      />

      <div className="flex gap-6">
        <div className="flex-1">
          <div className="app-text-body-1">Network</div>
          <Select
            defaultSelectedKeys={["binance"]}
            items={networks}
            onSelectionChange={(keys) => {
              handleChange("", keys as string);
            }}
            classNames={{
              trigger: "w-full flex-row-reverse",
              innerWrapper: "w-full",
            }}
          >
            {(item) => (
              <SelectItem key={item.value} textValue={item.value}>
                <div className="flex items-center gap-2">
                  <div className="app-text-body-1">{item.value}</div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
        <div className="flex-1">
          <div className="app-text-body-1">Prize token</div>
          <Select
            defaultSelectedKeys={["swk"]}
            items={networks}
            onSelectionChange={(keys) => {
              handleChange("", keys as string);
            }}
            classNames={{
              trigger: "w-full flex-row-reverse",
              innerWrapper: "w-full",
            }}
          >
            {(item) => (
              <SelectItem key={item.value} textValue={item.value}>
                <div className="flex items-center gap-2">
                  <div className="app-text-body-1">{item.value}</div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          className="flex-1"
          label="NFT contract address"
          placeholder="e.g. 0x1a92...71050c"
          value={formData.nftContractAddress}
          onChange={(e) => {
            handleChange("nftContractAddress", e.target.value);
          }}
          endContent={<button className="text-green-500">Paste</button>}
        />
      </div>
      <p className="app-text-body-small text-secondary">
        The players require to own this NFT to join this game
      </p>
      <div className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-gray-300 p-4">
        <Image src={IcGameCreateNft} width={50} height={50} alt="nft icon" />
        <div>
          <div className="text-gray-500">Your NFT</div>
          <div className="text-gray-400">Contract address: -</div>
        </div>
      </div>
    </div>
  );
};

export default GameCreationForm;
