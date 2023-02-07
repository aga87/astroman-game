import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'animated';
  text: string;
  handleClick: () => void;
  isDisabled?: boolean;
};

export const Button = ({
  variant,
  text,
  handleClick,
  isDisabled = false
}: ButtonProps) => {
  let className = styles.button;
  if (variant === 'secondary') {
    className = `${className} ${styles['button--secondary']}`;
  } else if (variant === 'animated') {
    className = `${className} ${styles['button--animated']}`;
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      disabled={isDisabled}
      className={className}
    >
      {text}
    </button>
  );
};
