import React from 'react';

type GameDataContainerProps = {
  hasError: boolean;
};

const GameDataContainer: React.FC<GameDataContainerProps> = ({
  hasError,
  children,
}) => {
  if (hasError) {
    throw new Error();
  }

  return <>{children}</>;
};

export default GameDataContainer;
