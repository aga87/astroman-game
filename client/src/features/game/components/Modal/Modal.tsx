import React, { useId } from 'react';
import { Star } from '../../../../components';
import { useScrollFreeze } from './useScrollFreeze';
import styles from './modal.module.scss';

type ModalProps = {
  title: string;
  children: React.ReactNode;
};

export const Modal = ({ title, children }: ModalProps) => {
  const headingId = useId();

  // Freeze background scroll when modal is open
  useScrollFreeze();

  return (
    <div
      className={styles.modal}
      role='dialog'
      aria-modal
      aria-labelledby={headingId}
    >
      <div className={styles.modal__inner}>
        <h1 className={styles.modal__heading} id={headingId}>
          {title}
        </h1>
        <div>
          <Star /> <Star /> <Star />
        </div>
        {children}
        <div>
          <Star /> <Star /> <Star />
        </div>
      </div>
    </div>
  );
};
