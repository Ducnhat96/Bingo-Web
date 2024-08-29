import {
  ButtonCommon,
  CountDownBoard,
  PlayerCount,
  RewardValue,
} from "@/components";
import React from "react";

const WaitingRoom = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <CountDownBoard
        containerClasses="w-full absolute top-0 left-0 h-fit"
        boardClasses="min-w-[0px]"
      >
        <div className="absolute left-1/2 top-2/3 flex w-full -translate-x-1/2 -translate-y-2/3 transform flex-col items-center justify-start gap-0">
          <p className="app-text-body-small text-secondary">Rule of the game</p>
          <h1 className="app-text-headline-small mb-2 text-primary">
            Cat Lover Bingo
          </h1>
          <div className="mr-10 flex w-full items-center justify-between">
            <PlayerCount count={223} containerClasses="mt-0" />
            <RewardValue amount={10000} />
          </div>
        </div>
      </CountDownBoard>
      <section className="relative mb-20 mt-[220px] flex min-h-0 w-full flex-1 flex-col items-center justify-center rounded-2xl bg-accent px-2 py-3.5">
        <div className="mb-10 mt-3 flex w-full flex-grow flex-col items-center justify-start gap-4 overflow-auto rounded-2xl border border-accent bg-table p-4 max-md:max-w-full">
          <p className="app-text-body-medium text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <ButtonCommon
          title="Let's Get Started!"
          btnClass="w-[60%] mx-auto mt-3 bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)] absolute left-1/2 -translate-x-1/2 -bottom-10"
        />
      </section>
    </div>
  );
};

export default WaitingRoom;
