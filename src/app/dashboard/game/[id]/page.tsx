import React from "react";

interface GameDetailParams {
  id: string;
}

interface GameDetailProps {
  params: GameDetailParams;
}

const GameDetail: React.FC<GameDetailProps> = async ({ params }) => {
  const { id } = params;

  return (
    <div>Hello {id}</div>
  );
};

export default GameDetail;
