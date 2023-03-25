import React, { useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoom, selectPlayer } from '../../../../redux/reducers';
import { sendMessage } from '../../redux/reducers/chat';
import { SocketContext } from '../../../../context/SocketContext';
import { TextInput } from '../../../../components';

export const ChatFooter = () => {
  const socket = useContext(SocketContext);
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

      dispatch(sendMessage(message));
      socket?.emit('send_message', { room, message });

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
