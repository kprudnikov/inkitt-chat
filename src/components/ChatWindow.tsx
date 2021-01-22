import React, { ReactChildren, ReactChild } from "react";
import "./ChatWindow.css";

interface PropTypes {
  children: ReactChildren | ReactChild;
}

const ChatWindow = ({ children }: PropTypes) => {
  return (
    <div className="chat-window" data-test-id="chat-window">
      {children}
    </div>
  );
};

export default ChatWindow;
