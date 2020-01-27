import React from "react";
import useHome from "../hooks/useHome";
import PostMessageForm from "../components/PostMessageForm";

function Home() {
  const { messages, postMessage } = useHome();

  return (
    <>
      <PostMessageForm postMessage={postMessage} />
      <ul>
        {messages.map(message => {
          <li>{message}</li>;
        })}
      </ul>
    </>
  );
}

export default Home;
