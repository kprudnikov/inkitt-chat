import React, {
  useState,
  MouseEvent,
  FormEvent,
} from "react";
import Input from "./Input";
import Button from "./Button";
import './DialogForm.css';

interface PropTypes {
  onSubmit: (value: string) => void;
}

const DialogForm = ({ onSubmit }: PropTypes) => {
  const [enteredText, setEnteredText] = useState("");

  const onTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;

    setEnteredText(text);
  };

  const handleFormSubmit = (event: MouseEvent | FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    onSubmit(enteredText);
    setEnteredText("");
  };

  return (
    <form onSubmit={handleFormSubmit} data-test-id="dialog-form" className="dialog-form">
      <Input onChange={onTextChange} value={enteredText} placeholder="Enter your message" />
      <Button onClick={handleFormSubmit}>Send</Button>
    </form>
  );
};

export default DialogForm;
