import React from "react";
import {
  render,
  screen,
  configure,
  fireEvent,
  within,
} from "@testing-library/react";
import App from "./App";

configure({ testIdAttribute: "data-test-id" });

describe("App main elements", () => {
  const getMessageEvent = (message: string) => ({
    target: {
      value: message,
    },
  });

  it("renders chat window and dialogue form", () => {
    render(<App />);

    const chatWindow = screen.getByTestId("chat-window");
    const dialogForm = screen.getByTestId("dialog-form");
    expect(chatWindow).toBeInTheDocument();
    expect(dialogForm).toBeInTheDocument();
  });

  it("can post messages", () => {
    render(<App />);

    const testMessage = "Test message";
    const chatWindow = screen.getByTestId("chat-window");

    const input = screen.getByPlaceholderText(/enter.+message/i);
    const sendButton = screen.getByText(/send/i);

    fireEvent.change(input, getMessageEvent(testMessage));
    fireEvent.click(sendButton);

    const { getByText } = within(chatWindow);
    expect(getByText(testMessage)).toBeInTheDocument();
  });

  it("can post reply", () => {
    render(<App />);

    const testMessage = "Test message";
    const testReply = "Test reply";

    const chatWindow = screen.getByTestId("chat-window");
    const input = screen.getByPlaceholderText(/enter.+message/i);
    const sendButton = screen.getByText(/send/i);

    fireEvent.change(input, getMessageEvent(testMessage));
    fireEvent.click(sendButton);

    const { getByText: getButtonByText } = within(chatWindow);
    const replyButton = getButtonByText(/reply/i);
    const threadWrapper = chatWindow.querySelector('.thread-wrapper');

    fireEvent.click(replyButton);
    fireEvent.change(input, getMessageEvent(testReply));
    fireEvent.click(sendButton);

    const { getByText: getReplyByText } = within(threadWrapper);
    expect(getReplyByText(testReply)).toBeInTheDocument();
  });
});
