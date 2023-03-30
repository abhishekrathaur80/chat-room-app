import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";
const App = () => {
  if (!localStorage.getItem("userName")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="4748d962-fa86-4603-aee8-6832cc4ab50c"
      userName={localStorage.getItem("userName")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
