import React, { useState } from 'react';

export const useTextInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, handleChange };
};
