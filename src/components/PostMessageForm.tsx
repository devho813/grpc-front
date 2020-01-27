import React, { useState, useCallback } from "react";
import { memo } from "react";

type Props = {
  postMessage: (text: string) => void
};

function PostMessageForm({postMessage}: Props) {
  const [inputMessage, setInputMessage] = useState('');

  const onChangeInputMessage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  }, []);

  const onSubmitMessage = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMessage(inputMessage);
    setInputMessage('');
  }, [inputMessage]);
  
  return (
    <form onSubmit={onSubmitMessage}>
      <input type="text" value={inputMessage} onChange={onChangeInputMessage} />
      <button type="submit">메세지 발송</button>
    </form>
  );
}

export default memo(PostMessageForm);
