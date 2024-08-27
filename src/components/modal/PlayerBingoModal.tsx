import Image from "next/image";
import React, { type FC } from "react";
import { Modal } from "react-responsive-modal";
import { ImgHomeHero, ImgTwoSticks } from "../../../public/images";
import RewardValue from "../RewardValue";
import ButtonCommon from "../Button";
import { getAvatarByWalletAddress } from "../../../utils";
import PlayerCardHorizontal from "../PlayerCardHorizontal";

interface PlayerBingoModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const PlayerBingoModal: FC<PlayerBingoModalProps> = ({
  isOpen,
  onCloseModal,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      center
      classNames={{
        modal: "customModal rowdies-light rounded-2xl",
        overlay: "customOverlay customBgOverlay",
      }}
      showCloseIcon={false}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={ImgHomeHero} alt="Hero" className="w-full" />
        <Image src={ImgTwoSticks} alt="Two sticks" />
        <section className="flex min-w-[400px] max-w-full flex-col justify-center rounded-2xl bg-accent px-2 py-3.5">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 pb-16 pt-4 max-md:max-w-full">
            <p className="app-text-title-medium">
              Congratulation! One player Bingo
            </p>
            <p className="app-text-display-medium text-primary">2nd</p>
            <PlayerCardHorizontal
              avatarUrl={getAvatarByWalletAddress(
                "0xB7d550FA8A29667c6Be4bFD56a867a67e7c8A56f"
              )}
              name="Nhat Pham"
              address={"0xB7d550FA8A29667c6Be4bFD56a867a67e7c8A56f"}
              isBordered
            />
            <p className="app-text-title-small">Player will receive</p>
            <RewardValue amount={123.12} fontSize={24} />
          </div>
        </section>
        <div className="absolute bottom-0">
          <ButtonCommon
            title="Continue Game"
            btnClass="w-fit bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
            onClick={onCloseModal}
          />
        </div>
      </div>
    </Modal>
  );
};
export default PlayerBingoModal;
