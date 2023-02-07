import React from 'react';
import styles from './star.module.scss';

type StarProps = {
  size?: 'small' | 'large';
};

export const Star = ({ size = 'small' }: StarProps) => {
  let className = styles.star;
  if (size === 'large') {
    className = `${className} ${styles['star--large']}`;
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 80 80'
      preserveAspectRatio='xMidYMid meet'
      className={className}
    >
      <polygon
        points='0,30 30,28 40,0 50,28 80,30 56,47 64,77 40,60 14,77 22,47 0,30'
        fill='yellow'
      />
    </svg>
  );
};
