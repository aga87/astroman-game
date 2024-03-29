import React, { useId } from 'react';
import styles from './textInput.module.scss';

type TextInputProps = {
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  value,
  placeholder,
  handleChange,
  handleKeyDown
}: TextInputProps) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {placeholder}
      </label>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown && handleKeyDown}
        className={styles.textInput}
      />
    </>
  );
};
