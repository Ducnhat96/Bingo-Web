import React, { type FC } from "react";
import { Modal } from "react-responsive-modal";
import ButtonCommon from "../Button";
import ListOfPlayers from "@/containers/dashboard/ListOfPlayers";
import ListOfLeaderBoard from "@/containers/game-master/ListOfLeaderBoard";

interface LeaderBoardModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const players = [
  {
    id: "1st",
    img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
    name: "Luis Dat Lu",
    address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
  },
  {
    id: "2nd",
    img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
    name: "Luis Dat Lu",
    address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
  },
  {
    id: "3rd",
    img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
    name: "Luis Dat Lu",
    address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
  },
];

const LeaderBoardModal: FC<LeaderBoardModalProps> = ({
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
        overlay: "customOverlay",
      }}
      showCloseIcon={false}
    >
      <div className="flex flex-col items-center justify-center">
        <section className="flex w-[600px] flex-col justify-center rounded-2xl bg-accent px-2 py-3.5">
          <p className="app-text-headline-large text-center">Leaderboard</p>
          <div className="mb-16 mt-6 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table pt-4 max-md:max-w-full">
            <div className="w-full flex-1 overflow-auto border-b border-accent">
              <ListOfLeaderBoard players={players} />
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 flex flex-row gap-4">
          <ButtonCommon
            title="Done"
            btnClass="w-[200px] bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
            onClick={onCloseModal}
          />
        </div>
      </div>
    </Modal>
  );
};
export default LeaderBoardModal;
