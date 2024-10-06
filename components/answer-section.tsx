 "use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SetStateAction, useState, useEffect, useRef, KeyboardEvent } from "react";
import { Input } from "./ui/input";
import { LoaderCircle, ChevronDown } from "lucide-react";
import { useTimer } from "./timer-context";

interface Message {
    sender: "user" | "ai";
    text: string;
}

const AnswerSection = () => {
    const [answer, setAnswer] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const chatContentRef = useRef<HTMLDivElement | null>(null);

    // Get values from timer context
    const { isStudyStarted, timerReset, isTimerRunning } = useTimer();

    // Warn user before they refresh or leave the page
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isStudyStarted && !timerReset) {
                e.preventDefault();
                e.returnValue = ""; // This is required for the warning dialog to be shown
            }
        };

        if (isStudyStarted) {
            window.addEventListener("beforeunload", handleBeforeUnload);
        }

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isStudyStarted, timerReset]);

    const handleAnswerSubmit = () => {
        if (answer.trim()) {
            const userMessage: Message = { sender: "user", text: answer };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            setIsLoading(true);

            // Simulate AI response
            const aiResponse: Message = {
                sender: "ai",
                text: `Thank you for your input! Here is some feedback on "${answer}".`,
            };

            // Add AI response after a delay to simulate processing
            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, aiResponse]);
                setIsLoading(false);
                scrollToBottom();
            }, 1000);

            setAnswer(""); // Clear the input after submitting
        }
    };

    const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
        setAnswer(e.target.value);
    };

    // New function to handle "Enter" key press
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent default behavior of Enter key
            handleAnswerSubmit(); // Submit the answer when Enter is pressed
        }
    };

    // Effect to clear messages and input field when the timer is reset
    useEffect(() => {
        if (timerReset) {
            setMessages([]); // Clear all messages in the chat
            setAnswer(""); // Clear the input field
        }
    }, [timerReset]);

    const scrollToBottom = () => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTo({
                top: chatContentRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        if (chatContentRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContentRef.current;
            setShowScrollButton(scrollTop + clientHeight < scrollHeight - 50);
        }
    };

    useEffect(() => {
        const chatDiv = chatContentRef.current;
        if (chatDiv) {
            chatDiv.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (chatDiv) {
                chatDiv.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <Card className="w-full h-[550px] dark:bg-[#1D1D20] flex flex-col relative">
            <CardHeader className="border-b">
                <CardTitle>Answer Section</CardTitle>
                <CardDescription>Chat with our AI to get feedback on your interview.</CardDescription>
            </CardHeader>
            <CardContent ref={chatContentRef} className="flex-grow overflow-y-auto p-4">
                {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                        <div
                            className={`inline-block p-2 rounded-md ${
                                message.sender === "user" ? "bg-blue-800 text-white" : "bg-gray-200 text-black"
                            } break-words max-w-full`}
                            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="mb-4 text-left">
                        <div className="inline-block p-2 rounded-md bg-gray-200 text-black">
                            <div className="animate-spin">
                                <LoaderCircle className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
            <CardFooter className="lg:sticky lg:bottom-0 bg-background dark:bg-[#1D1D20] w-full p-4">
                <div className="flex w-full gap-2">
                    <Input
                        value={answer}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown} // Added onKeyDown to handle Enter key
                        className="w-full dark:bg-[#1D1D20]"
                        placeholder="Type your answer..."
                        disabled={!isStudyStarted || isLoading || !isTimerRunning}
                    />
                    <Button
                        type="submit"
                        onClick={handleAnswerSubmit}
                        size="sm"
                        className="bg-blue-800 hover:bg-blue-800/90"
                        disabled={!isStudyStarted || !answer.trim() || isLoading || !isTimerRunning}
                    >
                        Submit
                    </Button>
                </div>
            </CardFooter>
            {showScrollButton && (
                <Button
                    size="icon"
                    variant="outline"
                    onClick={scrollToBottom}
                    className="absolute bottom-16 left-4 rounded-full p-1"
                >
                    <ChevronDown className="w-5 h-5 text-blue-800 dark:text-blue-600" />
                </Button>
            )}
        </Card>
    );
};

export default AnswerSection;