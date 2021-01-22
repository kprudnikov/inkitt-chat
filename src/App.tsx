import React, { useState } from "react";
import { IMessage, IMessages } from "./interfaces/message";
import { createMessage } from "./utils";
import Thread from "./components/thread/Thread";
import Container from "./components/grid/Container";
import Paper from "./components/grid/Paper";
import Space from "./components/grid/Space";
import ChatWindow from "./components/ChatWindow";
import DialogForm from "./components/DialogForm";
import Message from "./components/thread/Message";

function App() {
  const [messagesList, setMessagesList] = useState<Array<string>>([]);
  const [messages, setMessages] = useState<IMessages>({});
  const [selectedThreadId, setSelectedThreadId] = useState("");

  const addNewMessage = (message: string): void => {
    const newMessage = createMessage(message);

    setMessagesList(messagesList.concat([newMessage.id]));
    setMessages({
      ...messages,
      [newMessage.id]: newMessage,
    });
  };

  const addNewReply = (parentId: string, message: string): void => {
    const newMessage = createMessage(message);
    const selectedThreadId: IMessage = messages[parentId];
    selectedThreadId.response = selectedThreadId.response.concat([
      newMessage.id,
    ]);

    setMessages({
      ...messages,
      [newMessage.id]: newMessage,
    });
  };

  const handleAddNewMessage = (newMessage: string) => {
    if (!newMessage) return;

    if (selectedThreadId) {
      addNewReply(selectedThreadId, newMessage);
      setSelectedThreadId("");
    } else {
      addNewMessage(newMessage);
    }
  };

  return (
    <Container>
      <Paper>
        <>
          <Space>
            <ChatWindow>
              <Space>
                <>
                  {messagesList.map((id) => (
                    <Thread
                      key={id}
                      messageId={id}
                      messages={messages}
                      onReplyClick={setSelectedThreadId}
                      selectedThreadId={selectedThreadId}
                    />
                  ))}
                </>
              </Space>
            </ChatWindow>
          </Space>
          {selectedThreadId && (
            <Space>
              <Message>{">" + messages[selectedThreadId].value}</Message>
            </Space>
          )}
          <Space>
            <DialogForm onSubmit={handleAddNewMessage} />
          </Space>
        </>
      </Paper>
    </Container>
  );
}

export default App;
