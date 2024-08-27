import Image from "next/image";
import React, { type FC } from "react";
import { Modal } from "react-responsive-modal";
import ButtonCommon from "../Button";
import { ImgEndGame } from "../../../public/images";

interface EndGameModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const EndGameModal: FC<EndGameModalProps> = ({ isOpen, onCloseModal }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      center
      classNames={{
        modal: "customModal rowdies-light rounded-2xl",
        overlay: "customOverlay",
      }}
      showCloseIcon={false}
    >
      <div className="flex flex-col items-center justify-center">
        <section className="flex min-w-[400px] max-w-[550px] flex-col justify-center rounded-2xl bg-accent px-2 py-3.5">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 pb-16 pt-4 max-md:max-w-full">
            <Image src={ImgEndGame} alt="End Game" />

            <p className="app-text-headline-medium">
              Do you want to end game now?
            </p>
            <p className="app-text-body-large text-center text-secondary">
              If the game end, you will not resume anymore. All winning players
              will receive their prizes, and the unclaimed prizes will be
              canceled.
            </p>
          </div>
        </section>
        <div className="absolute bottom-0 flex flex-row gap-4">
          <ButtonCommon
            title="Cancel"
            btnClass="w-fit bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
            onClick={onCloseModal}
          />
          <ButtonCommon
            title="End Game"
            btnClass="w-fit bg-dangerous"
            onClick={onCloseModal}
          />
        </div>
      </div>
    </Modal>
  );
};
export default EndGameModal;
