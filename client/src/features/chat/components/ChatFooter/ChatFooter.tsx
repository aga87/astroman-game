import React from 'react';
import { TextInput, useTextInput } from '../../../../components';

export const ChatFooter = () => {
  const message = useTextInput('');

  return (
    <div>
      <TextInput
        value={message.value}
        handleChange={message.handleChange}
        placeholder='Start typing...'
      />
    </div>
  );
};
