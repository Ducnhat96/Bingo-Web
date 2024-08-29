import Image from "next/image";
import { type FC } from "react";
import { Modal } from "react-responsive-modal";
import { ImgHomeHero, ImgTwoSticks } from "../../../public/images";
import ButtonCommon from "../Button";
import RewardValue from "../RewardValue";

interface PlayerBingoModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const SelfBingoModal: FC<PlayerBingoModalProps> = ({
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
        overlay: "customPlayerOverlay customBgOverlay",
      }}
      showCloseIcon={false}
    >
      <div className="relative flex flex-col items-center justify-center pb-10">
        <Image src={ImgHomeHero} alt="Hero" className="relative z-20 w-full" />
        <Image
          src={ImgTwoSticks}
          alt="Two sticks"
          className="absolute top-[110px] z-10"
        />
        <section className="mt-10 flex flex-col justify-center rounded-2xl bg-accent px-2 py-3.5 pb-14">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 py-4 max-md:max-w-full">
            <p className="app-text-title-medium">
              Congratulation! You Bingo at
            </p>
            <p className="app-text-display-medium text-primary">1st</p>
            <div className="w-full border-b-1 border-[#EED090]"></div>
            <div className="flex items-center gap-2">
              <p className="app-text-title-small text-secondary">Reward:</p>
              <RewardValue amount={123.12} fontSize={22} hideRewardIcon />
            </div>
            <div className="flex items-center gap-4">
              <p className="app-text-label-small text-secondary">Network:</p>
              <p className="app-text-label-medium text-secondary">
                Binance Smart Chain
              </p>
            </div>
            <p className="app-text-body-small text-center text-secondary">
              Note: The owner of this game will distribute reward to you after
              the game is finished.
            </p>
          </div>
        </section>
        <div className="absolute bottom-0">
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
export default SelfBingoModal;
