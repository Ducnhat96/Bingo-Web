"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

interface TimeProps {
  isOpen: boolean;
  onClose: () => void;
  timeInputRef: React.RefObject<HTMLDivElement>;
  onTimeChange: (arg: any) => void;
}

interface DateProps {
  isOpen: boolean;
  onClose: () => void;
  dateInputRef: React.RefObject<HTMLDivElement>;
  onDateChange: (arg: any) => void;
  startDate: Date | null;
}

export const TimePickerModal: React.FC<TimeProps> = ({
  isOpen,
  onClose,
  timeInputRef,
  onTimeChange,
}) => {
  const timeOptions = Array.from(Array(24).keys()).flatMap((hour) => [
    `${hour.toString().padStart(2, "0")}:00`,
    `${hour.toString().padStart(2, "0")}:30`,
  ]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={{
        content: {
          position: "absolute",
          top: timeInputRef.current?.getBoundingClientRect().bottom,
          left: timeInputRef.current?.getBoundingClientRect().left,
          right: "auto",
          bottom: "auto",
          transform: "none",
          marginRight: "0",
          padding: "0",
          borderRadius: "8px",
          zIndex: 1000,
          width: "150px",
          maxHeight: "300px"
        },
        overlay: {
          backgroundColor: "transparent",
        },
      }}
    >
      <div className="flex-1 bg-white">
        {timeOptions.map((time) => (
          <div
            key={time}
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() => {
              onTimeChange(time);
              onClose();
            }}
          >
            {time}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export const DatePickerModal: React.FC<DateProps> = ({
  isOpen,
  onClose,
  dateInputRef,
  onDateChange,
  startDate,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={{
        content: {
          position: "absolute",
          top: dateInputRef.current?.getBoundingClientRect().bottom,
          left: dateInputRef.current?.getBoundingClientRect().left,
          right: "auto",
          bottom: "auto",
          transform: "none",
          marginRight: "0",
          padding: "0",
          borderRadius: "8px",
          zIndex: 1000,
          background: "transparent",
        },
        overlay: {
          backgroundColor: "transparent",
        },
      }}
    >
      <DatePicker selected={startDate} onChange={onDateChange} inline />
    </Modal>
  );
};
