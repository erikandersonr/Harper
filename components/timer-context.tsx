// "use client";

// import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// interface TimerContextProps {
//     timeLeft: number;
//     setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
//     isTimerRunning: boolean;
//     startTimer: () => void;
//     pauseTimer: () => void;
//     resumeTimer: () => void;
//     resetTimer: () => void;
//     timerReset: boolean;
//     isStudyStarted: boolean;
//     setStudyStarted: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const TimerContext = createContext<TimerContextProps | undefined>(undefined);

// interface TimerProviderProps {
//     children: ReactNode;
// }

// export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
//     // Initial state setup without relying on localStorage
//     const [timeLeft, setTimeLeft] = useState<number>(30 * 60);
//     const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
//     const [isStudyStarted, setStudyStarted] = useState<boolean>(false);
//     const [timerReset, setTimerReset] = useState(false);

//     const startTimer = () => {
//         setIsTimerRunning(true);
//         setTimerReset(false); // Reset the reset flag when starting
//         setStudyStarted(true); // Set the study to started
//     };

//     const pauseTimer = () => {
//         setIsTimerRunning(false);
//     };

//     const resumeTimer = () => {
//         setIsTimerRunning(true);
//     };

//     const resetTimer = () => {
//         setTimeLeft(30 * 60);
//         setIsTimerRunning(false);
//         setTimerReset(true); // Indicate that the timer has been reset
//         setStudyStarted(false); // Set study back to not started
//     };

//     useEffect(() => {
//         let timer: NodeJS.Timeout;
//         if (isTimerRunning && timeLeft > 0) {
//             timer = setInterval(() => {
//                 setTimeLeft((prevTime) => prevTime - 1);
//             }, 1000);
//         } else if (timeLeft === 0) {
//             setIsTimerRunning(false);
//         }
//         return () => clearInterval(timer);
//     }, [isTimerRunning, timeLeft]);

//     return (
//         <TimerContext.Provider
//             value={{
//                 timeLeft,
//                 setTimeLeft,
//                 isTimerRunning,
//                 startTimer,
//                 pauseTimer,
//                 resumeTimer,
//                 resetTimer,
//                 timerReset,
//                 isStudyStarted,
//                 setStudyStarted,
//             }}
//         >
//             {children}
//         </TimerContext.Provider>
//     );
// };

// export const useTimer = () => {
//     const context = useContext(TimerContext);
//     if (!context) {
//         throw new Error("useTimer must be used within a TimerProvider");
//     }
//     return context;
// };

"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TimerContextProps {
    timeLeft: number;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
    isTimerRunning: boolean;
    startTimer: () => void;
    pauseTimer: () => void;
    resumeTimer: () => void;
    resetTimer: () => void;
    timerReset: boolean;
    isStudyStarted: boolean;
    setStudyStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

interface TimerProviderProps {
    children: ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
    const [timeLeft, setTimeLeft] = useState<number>(30 * 60);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const [isStudyStarted, setStudyStarted] = useState<boolean>(false);
    const [timerReset, setTimerReset] = useState<boolean>(false);

    const startTimer = () => {
        console.log("Starting timer...");
        setIsTimerRunning(true);
        setTimerReset(false);
        setStudyStarted(true);
    };

    const pauseTimer = () => {
        setIsTimerRunning(false);
    };

    const resumeTimer = () => {
        setIsTimerRunning(true);
    };

    const resetTimer = () => {
        console.log("Resetting timer...");
        setTimeLeft(30 * 60);
        setIsTimerRunning(false);
        setTimerReset(true);
        setStudyStarted(false);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isTimerRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsTimerRunning(false);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft]);

    return (
        <TimerContext.Provider
            value={{
                timeLeft,
                setTimeLeft,
                isTimerRunning,
                startTimer,
                pauseTimer,
                resumeTimer,
                resetTimer,
                timerReset,
                isStudyStarted,
                setStudyStarted,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error("useTimer must be used within a TimerProvider");
    }
    return context;
};