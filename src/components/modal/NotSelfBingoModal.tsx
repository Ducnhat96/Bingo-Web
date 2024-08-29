import Image from "next/image";
import { type FC } from "react";
import { Modal } from "react-responsive-modal";
import { ImgNotSelfBingo, ImgTwoSticks } from "../../../public/images";
import ButtonCommon from "../Button";

interface PlayerBingoModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const NotSelfBingoModal: FC<PlayerBingoModalProps> = ({
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
        <section className="relative flex flex-col justify-center rounded-2xl bg-accent px-2 py-3.5">
          <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 py-4 max-md:max-w-full">
            <Image
              src={ImgNotSelfBingo}
              alt="End Game"
              width={100}
              height={100}
            />
            <p className="app-text-title-medium text-secondary">
              Wow! One player Bingo at
            </p>
            <p className="app-text-headline-large">1st</p>
            <p className="app-text-body-small text-center text-secondary">
              Don’t worry, there are many attractive prizes still waiting for
              you.
            </p>
          </div>
          <Image
            src={ImgTwoSticks}
            alt="Two sticks"
            className="absolute -bottom-10 left-1/2 z-10 -translate-x-1/2"
          />
        </section>
        <section className="mt-10 flex w-full flex-col justify-center rounded-2xl bg-accent px-2 py-3.5 pb-14">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 py-4 max-md:max-w-full">
            <p className="app-text-body-small">Prize in the next round</p>
            <p className="app-text-title-large text-primary">122.23 SWK</p>
          </div>
        </section>
        <div className="absolute bottom-0">
          <ButtonCommon
            title="Continue in: 5s"
            btnClass="w-fit bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
            onClick={onCloseModal}
          />
        </div>
      </div>
    </Modal>
  );
};
export default NotSelfBingoModal;
