import React, { useState } from 'react';
import { socket } from '../../../../socket';
import { useAppDispatch, useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoom, selectPlayer } from '../../../../redux/reducers';
import { sendMessage } from '../../redux/reducers/chat';
import { TextInput } from '../../../../components';

export const ChatFooter = () => {
  const room = useAppSelector(selectRoom);
  const player = useAppSelector(selectPlayer);
  const [msg, setMsg] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const handleSendMessage = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const { key } = e;
    if (key === 'Enter') {
      e.preventDefault();

      const message: Message = {
        body: msg.trim(),
        sender: player
      };

      socket.emit('send_message', { room, message });
      dispatch(sendMessage(message));

      setMsg('');
    }
  };

  return (
    <TextInput
      value={msg}
      handleChange={handleChange}
      handleKeyDown={handleSendMessage}
      placeholder='Start typing...'
    />
  );
};
