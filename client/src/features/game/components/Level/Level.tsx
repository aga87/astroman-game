import React from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectLevel } from '../../redux/gameSelectors';

export const Level = () => {
  const level = useAppSelector(selectLevel);

  return <div>Level {level}</div>;
};
