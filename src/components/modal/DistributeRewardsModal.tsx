import { type FC } from "react";
import { Modal } from "react-responsive-modal";
import DashboardButton from "../DashboardButton";
import Image from "next/image";
import { IcDashboardCheck } from "../../../public/icons";
import { addressShorten } from "../../../utils";

interface DistributeRewardsModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const InteractableItem = ({
  title,
  btnTitle,
  isActive,
  isChecked,
  checkedCustomCpn,
}: {
  title: string;
  btnTitle: string;
  isActive?: boolean;
  isChecked?: boolean;
  checkedCustomCpn?: React.ReactNode;
}) => {
  const renderRightOption = () => {
    if (!isChecked && isActive) {
      return <DashboardButton title={btnTitle} />;
    }
    if (isChecked) {
      return <Image src={IcDashboardCheck} alt="checked" />;
    }

    return;
  };

  return (
    <div
      className={`${isActive && !isChecked ? "bg-primary5 border-primary" : "border-mono-border"} mt-6 flex min-h-[90px] w-full items-center justify-between rounded-3xl border-1 p-6`}
    >
      <div>
        <h5>{title}</h5>
        {isChecked && checkedCustomCpn}
      </div>
      {renderRightOption()}
    </div>
  );
};

const DistributeRewardsModal: FC<DistributeRewardsModalProps> = ({
  isOpen,
  onCloseModal,
}) => {
  const isApproved = false;
  const isDistributed = false;

  const handleClickDone = () => {
    if (!isApproved && !isDistributed) {
      return;
    }

    onCloseModal;
  };

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
      <div className="flex flex-col rounded-3xl bg-white px-8 py-6">
        <div className="flex flex-col items-center">
          <h1 className="app-text-headline-medium">Distribute Rewards</h1>
          <p className="app-text-body-large my-4 w-2/3 text-center text-secondary">
            Please complete all the following steps below to distribute rewards
            to players
          </p>
          <InteractableItem
            title="Approve Using Reward Token"
            btnTitle="Approve Now"
            isActive={!isApproved}
            isChecked={isApproved}
          />
          <InteractableItem
            title="Distribute The Rewards"
            btnTitle="Distribute Now"
            isActive={isApproved && !isDistributed}
            isChecked={isDistributed}
            checkedCustomCpn={
              <p className="app-text-body-medium text-mono-alternate mt-2">
                TxHash:{" "}
                <span className="text-primary underline">
                  {addressShorten("0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa")}
                </span>
              </p>
            }
          />
        </div>
        <div className="mt-10 flex items-center gap-14 self-end">
          <div
            className="app-text-title-medium cursor-pointer text-primary"
            onClick={onCloseModal}
          >
            Cancel
          </div>
          <DashboardButton
            title="Done"
            containerClasses={`${isApproved && isDistributed ? "bg-primary" : "[&&]:bg-[#82857D]"} px-16`}
            onClick={handleClickDone}
          />
        </div>
      </div>
    </Modal>
  );
};
export default DistributeRewardsModal;
