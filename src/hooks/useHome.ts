import { useEffect, useState, useCallback } from "react";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { MessageServicePromiseClient } from "../generated/MessageService_grpc_web_pb";
import { Message } from "../generated/MessageService_pb";

const client = new MessageServicePromiseClient("http://localhost:3001");

function useHome() {
  const [messages, setMessages] = useState<string[]>([
    "안녕하세요",
    "반값습니다"
  ]);

  useEffect(() => {
    const messageStream = client.getMessageStream(new Empty());

    messageStream.on("data", (response: Message) => {
      setMessages(prevState => [response.getText(), ...prevState]);
    });

    return () => {
      if(messageStream)
        messageStream.cancel();
    };
  }, []);

  const postMessage = useCallback(async (text: string) => {
    const requestMessage = new Message();
    requestMessage.setText(text);
    requestMessage.setCreateTime(Date.now());
    requestMessage.setAuthorName("이친호");

    try {
      const res = await client.postMessage(requestMessage);
      console.log(res.getStatus());
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { messages, postMessage };
}

export default useHome;
