import React, { useState } from "react";

interface InputFieldProps {
  onSendMessage: (message: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="mb-4 flex">
      <input
        id="inputField"
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="shadow appearance-none border w-full py-[15px] px-[10px] text-gray-700 bg-[#CED2D8] leading-tight focus:outline-none focus:shadow-outline rounded-[15px]"
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-[#0A1C3B] text-white rounded-full py-2 px-4"
      >
        Send
      </button>
    </div>
  );
};

export default InputField;
