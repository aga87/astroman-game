import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'animated';
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
  } else if (variant === 'tertiary') {
    className = `${className} ${styles['button--tertiary']}`;
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
