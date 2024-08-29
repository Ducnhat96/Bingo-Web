import Image from "next/image";
import React, { type FC } from "react";
import { Modal } from "react-responsive-modal";
import ButtonCommon from "../Button";
import { ImgEndGame } from "../../../public/images";

interface EndGameModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const PlayerEndGameModal: FC<EndGameModalProps> = ({
  isOpen,
  onCloseModal,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      center
      classNames={{
        modal: "customPlayerModal rowdies-light rounded-2xl",
        overlay: "customPlayerOverlay",
      }}
      showCloseIcon={false}
    >
      <div className="flex w-full flex-col items-center justify-center pb-10">
        <section className="flex w-full flex-col justify-center rounded-2xl bg-accent px-2 py-3.5 pb-14">
          <div className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 pt-4 max-md:max-w-full">
            <Image src={ImgEndGame} alt="End Game" />

            <p className="app-text-headline-medium">End Game</p>
            <p className="app-text-body-large text-center text-secondary">
              All the numbers in the game have called. Don’t worry, there are
              many attractive prizes still waiting for you in other game.
            </p>
          </div>
        </section>
        <div className="absolute bottom-6 flex flex-row gap-4">
          <ButtonCommon
            title="Go To Leaderboard"
            btnClass="w-fit bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
            onClick={onCloseModal}
          />
        </div>
      </div>
    </Modal>
  );
};
export default PlayerEndGameModal;
