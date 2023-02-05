import React from 'react';

type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button type='button' onClick={handleClick}>
      {text}
    </button>
  );
};
