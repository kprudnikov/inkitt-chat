import React, { MouseEvent } from "react";
import { IMessage, IMessages } from "../../interfaces/message";
import Message from "./Message";
import "./Thread.css";
import Button from "../Button";

interface PropTypes {
  messageId: string;
  messages: IMessages;
  onReplyClick: Function;
  selectedThreadId: string;
}

const Thread = ({
  messageId,
  messages,
  onReplyClick,
  selectedThreadId,
}: PropTypes) => {
  const message: IMessage = messages[messageId];
  const responseIds: Array<string> = message.response;
  const isActive: boolean = selectedThreadId === messageId;

  return (
    <div className="thread-wrapper">
      <div className={`thread-message-wrapper ${isActive ? 'thread-message-wrapper_active' : ''}`}>
        <Message id={`message-${messageId}`}>{message.value}</Message>
        <Button
          onClick={(event: MouseEvent) => {
            event.stopPropagation();
            onReplyClick(messageId);
          }}
          ariaDescribedBy={`message-${messageId}`}
        >
          Reply
        </Button>
      </div>
      {responseIds.map((id) => (
        <Thread
          key={id}
          messageId={id}
          messages={messages}
          onReplyClick={onReplyClick}
          selectedThreadId={selectedThreadId}
        />
      ))}
    </div>
  );
};

export default Thread;
