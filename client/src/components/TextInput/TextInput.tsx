import React from 'react';

type TextInputProps = {
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  value,
  placeholder,
  handleChange
}: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
