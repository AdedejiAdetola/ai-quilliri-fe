"use client";
import Image from "next/image";
import { useState } from "react";
import AutoQuestions from "./components/AutoQuestions/AutoQuestions";
import InputField from "./components/InputField";
import { Quilliri } from "@/app/api/api";

const inputBank = {
  card1: {
    image1: "/image1.svg",
    text1: "My waist hurts frequently. Do I need a scan?",
  },
  card2: {
    image2: "/image2.svg",
    text2: "Compare and contrast the two medical images",
  },
  card3: {
    image3: "/image3.svg",
    text3: "Predict the behaviours of a depressed individual",
  },
  card4: {
    image4: "/image4.svg",
    text4: "Outline the Disease State Fundamentals for Diabetes",
  },
  card5: {
    image5: "/image5.svg",
    text5: "What foods should I avoid if I have stomach ulcer?",
  },
  card6: {
    image6: "/image6.svg",
    text6: "My acne is getting worse. What can I do to fix it?",
  },
};

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleSendMessage = async (message: string) => {
    setMessages((prev) => [...prev, { text: message, sender: "user" }]);

    setTimeout(async () => {
      const questionR = {
        context: "",
        question: message,
      };
      try {
        const response = await Quilliri(questionR);
        console.log("Sign up successful:", response);
        setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
      } catch (error) {
        console.error("Sign up error:", error);
      }
    }, 1000);
  };

  const { card1, card2, card3, card4, card5, card6 } = inputBank;

  return (
    <div className="bg-[url('/circuit-board.svg')] h-screen flex flex-col overflow-hidden">
      <div className="flex flex-row h-full">
        <div className="bg-[#0A1C3B] w-[320px] h-full rounded-[15px] m-[15px] mr-0 px-[15px]">
          <div className="mt-[30px] flex justify-between items-center">
            <Image
              src="/ai-quilliri.svg"
              alt="AI Quilliri Logo"
              width={160}
              height={29.03}
              priority
            />

            <Image
              src="/sidebar-icon.svg"
              alt="Sidebar Icon"
              width={24}
              height={24}
              priority
            />
          </div>

          <div
            className="h-[50px] border border-[#3266c1] bg-[#0f2e67c8] rounded-[10px] flex items-center justify-between px-[15px] bg-blend-color-dodge cursor-pointer mt-[35px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleNewChat}
          >
            <p className={`${isHovered ? "text-[#F8F6F0]" : "text-[#929FAD]"}`}>
              New Chat
            </p>

            <Image
              src="/write-icon.svg"
              alt="New Chat"
              width={24}
              height={24}
              priority
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between overflow-hidden">
          <div className="flex-grow overflow-y-auto p-[20px]">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div>
                  <AutoQuestions
                    text={card1.text1}
                    image={card1.image1}
                    extraStyle="flex-row rounded-tr-[5px] ml-[70px]"
                    pStyle="mr-[10px]"
                  />

                  <AutoQuestions
                    text={card2.text2}
                    image={card2.image2}
                    extraStyle="flex-row rounded-tr-[5px] mt-[62px] mb-[68px]"
                    pStyle="mr-[10px]"
                  />

                  <AutoQuestions
                    text={card3.text3}
                    image={card3.image3}
                    extraStyle="flex-row rounded-tr-[5px] ml-[41px]"
                    pStyle="mr-[10px]"
                  />
                </div>

                <div>
                  <Image
                    src="/mid-logo.svg"
                    alt="Ai Quilliri logo"
                    width={166.74}
                    height={200}
                    priority
                  />
                </div>

                <div>
                  <AutoQuestions
                    text={card4.text4}
                    image={card4.image4}
                    extraStyle="flex-row-reverse rounded-tl-[5px] ml-[20px]"
                    pStyle="ml-[10px]"
                  />

                  <AutoQuestions
                    text={card5.text5}
                    image={card5.image5}
                    extraStyle="flex-row-reverse rounded-tl-[5px] ml-[84px] mt-[62px] mb-[68px]"
                    pStyle="ml-[10px]"
                  />

                  <AutoQuestions
                    text={card6.text6}
                    image={card6.image6}
                    extraStyle="flex-row-reverse rounded-tl-[5px] ml-[20px]"
                    pStyle="ml-[10px]"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-[30px] ${
                        message.sender === "user"
                          ? "bg-[#0A1C3B] text-white rounded-tr-[5px]"
                          : "bg-[#0A1C3B] text-white rounded-tl-[5px]"
                      } py-[12px] px-[20px] my-1 max-w-xs `}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4">
            <InputField onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
