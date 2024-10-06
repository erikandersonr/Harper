// "use client";

// import { ArrowLeft, CirclePause, CirclePlay, RotateCcw } from "lucide-react";
// import { Button } from "./ui/button";
// import { Progress } from "./ui/progress";
// import Link from "next/link";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { useTimer } from "./timer-context";
// import { useState, useEffect } from "react";
// import {
//     HoverCard,
//     HoverCardContent,
//     HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import { useRouter } from "next/navigation";

// const ChatNavbar: React.FC = () => {
//     const iconStyle = "w-5 h-5 text-blue-800";
//     const headerTextStyle = "text-blue-800 font-semibold";
//     const { timeLeft, isTimerRunning, pauseTimer, resumeTimer, resetTimer, isStudyStarted } = useTimer();

//     const initialTime = 30 * 60;

//     const progressValue = (timeLeft / initialTime) * 100;

//     const router = useRouter(); // Router for navigation

//     const formatTime = (seconds: number) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
//     };

//     const handleToggleTimer = () => {
//         if (isTimerRunning) {
//             pauseTimer();
//             console.log("Timer paused.");
//         } else {
//             resumeTimer();
//             console.log("Timer resumed.");
//         }
//     };

//     const handleResetTimer = () => {
//         resetTimer();
//         setOpenResetDialog(false);
//         console.log("Timer reset.");
//     };

//     const handleBackToDashboard = () => {
//         // Reset everything related to the case study and navigate to the dashboard
//         resetTimer(); // Reset the timer
//         setOpenBackDialog(false); // Close dialog
//         router.push("/dashboard"); // Navigate to dashboard
//     };

//     const [openResetDialog, setOpenResetDialog] = useState(false);
//     const [openBackDialog, setOpenBackDialog] = useState(false);

//     // Debugging useEffect for checking if the states are correctly updated
//     useEffect(() => {
//         console.log("isStudyStarted updated:", isStudyStarted);
//         console.log("isTimerRunning updated:", isTimerRunning);
//     }, [isStudyStarted, isTimerRunning]);

//     return (
//         <header className="bg-white sticky top-0 z-50 border-b shadow-sm py-4 px-8">
//             <div className="flex justify-between">
//                 <div className="flex gap-2 items-center">
//                     {/* Back to Dashboard Button with Dialog */}
//                     <Button variant="ghost" size="icon" onClick={() => setOpenBackDialog(true)}>
//                         <ArrowLeft className="w-5 h-5 text-blue-800" />
//                     </Button>
//                     <Dialog open={openBackDialog} onOpenChange={setOpenBackDialog}>
//                         <DialogTrigger asChild>
//                             <span className={headerTextStyle}>Back to Dashboard</span>
//                         </DialogTrigger>
//                         <DialogContent>
//                             <DialogHeader>
//                                 <DialogTitle className="text-blue-800">
//                                     Are you sure you want to leave?
//                                 </DialogTitle>
//                                 <DialogDescription>
//                                     This action will end the current case study session and reset all progress.
//                                 </DialogDescription>
//                                 <DialogDescription className="flex justify-end gap-2 pt-8">
//                                     <Button
//                                         size="sm"
//                                         variant="ghost"
//                                         className="text-primary"
//                                         onClick={() => setOpenBackDialog(false)}
//                                     >
//                                         Cancel
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         className="bg-blue-800 hover:bg-blue-800/90"
//                                         onClick={handleBackToDashboard}
//                                     >
//                                         Confirm
//                                     </Button>
//                                 </DialogDescription>
//                             </DialogHeader>
//                         </DialogContent>
//                     </Dialog>
//                 </div>

//                 <div className="flex items-center">
//                     {/* Progress Bar */}
//                     <div className="hidden md:block w-[200px]">
//                         <Progress value={progressValue} />
//                     </div>

//                     {/* Time Display */}
//                     <HoverCard>
//                         <HoverCardTrigger>
//                             <h1 className={`text-sm cursor-pointer px-4 ${headerTextStyle}`}>
//                                 {formatTime(timeLeft)}
//                             </h1>
//                         </HoverCardTrigger>
//                         <HoverCardContent className="w-full text-center">
//                             Time Remaining
//                         </HoverCardContent>
//                     </HoverCard>

//                     {/* Timer Control Button */}
//                     {isStudyStarted && (
//                         <HoverCard>
//                             <HoverCardTrigger>
//                                 <Button variant="ghost" size="icon" onClick={handleToggleTimer}>
//                                     {isTimerRunning ? (
//                                         <CirclePause className={iconStyle} />
//                                     ) : (
//                                         <CirclePlay className={iconStyle} />
//                                     )}
//                                 </Button>
//                             </HoverCardTrigger>
//                             <HoverCardContent className="w-full text-center">
//                                 {isTimerRunning ? (
//                                     <p className="text-muted-foreground">Pause</p>
//                                 ) : (
//                                     <p className="text-muted-foreground">Play</p>
//                                 )}
//                             </HoverCardContent>
//                         </HoverCard>
//                     )}

//                     {/* Reset Timer Dialog */}
//                     <Dialog open={openResetDialog} onOpenChange={setOpenResetDialog}>
//                         <DialogTrigger asChild>
//                             <Button variant="ghost" size="icon">
//                                 <RotateCcw className={iconStyle} />
//                             </Button>
//                         </DialogTrigger>
//                         <DialogContent>
//                             <DialogHeader>
//                                 <DialogTitle className="text-blue-800">
//                                     Are you sure you want to restart your time?
//                                 </DialogTitle>
//                                 <DialogDescription>
//                                     This action will restart the timer to 30 minutes and you may lose your progress.
//                                 </DialogDescription>
//                                 <DialogDescription className="flex justify-end gap-2 pt-8">
//                                     <Button
//                                         size="sm"
//                                         variant="ghost"
//                                         className="text-primary"
//                                         onClick={() => setOpenResetDialog(false)}
//                                     >
//                                         Cancel
//                                     </Button>
//                                     <Button
//                                         size="sm"
//                                         className="bg-blue-800 hover:bg-blue-800/90"
//                                         onClick={handleResetTimer}
//                                     >
//                                         Confirm
//                                     </Button>
//                                 </DialogDescription>
//                             </DialogHeader>
//                         </DialogContent>
//                     </Dialog>

//                     {/* End Simulation Button */}
//                     <Button size="sm" className="ml-2 bg-blue-800 hover:bg-blue-800/90">
//                         End Simulation
//                     </Button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default ChatNavbar;

"use client";

import { ArrowLeft, CirclePause, CirclePlay, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useTimer } from "./timer-context";
import { useState, useEffect } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRouter } from "next/navigation";

const ChatNavbar: React.FC = () => {
    const iconStyle = "w-5 h-5 text-blue-800 dark:text-blue-600";
    const headerTextStyle = "text-blue-800 dark:text-blue-600 font-semibold";
    const { timeLeft, isTimerRunning, pauseTimer, resumeTimer, resetTimer, isStudyStarted } = useTimer();

    const initialTime = 30 * 60;

    const progressValue = (timeLeft / initialTime) * 100;

    const router = useRouter(); // Router for navigation

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleToggleTimer = () => {
        if (isTimerRunning) {
            pauseTimer();
            console.log("Timer paused.");
        } else {
            resumeTimer();
            console.log("Timer resumed.");
        }
    };

    const handleResetTimer = () => {
        resetTimer();
        setOpenResetDialog(false);
        console.log("Timer reset.");
    };

    const handleBackToDashboard = () => {
        // Reset everything related to the case study and navigate to the dashboard
        resetTimer(); // Reset the timer
        setOpenBackDialog(false); // Close dialog
        router.push("/dashboard"); // Navigate to dashboard
    };

    const [openResetDialog, setOpenResetDialog] = useState(false);
    const [openBackDialog, setOpenBackDialog] = useState(false);

    // Debugging useEffect for checking if the states are correctly updated
    useEffect(() => {
        console.log("isStudyStarted updated:", isStudyStarted);
        console.log("isTimerRunning updated:", isTimerRunning);
    }, [isStudyStarted, isTimerRunning]);

    return (
        <header className="bg-background dark:bg-[#121212] sticky top-0 z-50 border-b shadow-sm py-4 px-8">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    {/* Back to Dashboard Button with Dialog */}
                    <Button variant="ghost" size="icon" onClick={() => setOpenBackDialog(true)}>
                        <ArrowLeft className="w-5 h-5 text-blue-800 dark:text-blue-600" />
                    </Button>
                    <Dialog open={openBackDialog} onOpenChange={setOpenBackDialog}>
                        <DialogTrigger asChild>
                            <span className={headerTextStyle}>Back to Dashboard</span>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-blue-800">
                                    Are you sure you want to leave?
                                </DialogTitle>
                                <DialogDescription>
                                    This action will end the current case study session and reset all progress.
                                </DialogDescription>
                                <DialogDescription className="flex justify-end gap-2 pt-8">
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="text-primary"
                                        onClick={() => setOpenBackDialog(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="bg-blue-800 hover:bg-blue-800/90"
                                        onClick={handleBackToDashboard}
                                    >
                                        Confirm
                                    </Button>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="flex items-center">
                    {/* Progress Bar */}
                    <div className="hidden md:block w-[200px]">
                        <Progress value={progressValue} />
                    </div>

                    {/* Time Display */}
                    <HoverCard>
                        <HoverCardTrigger>
                            <h1 className={`text-sm cursor-pointer px-4 ${headerTextStyle}`}>
                                {formatTime(timeLeft)}
                            </h1>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-full text-center">
                            Time Remaining
                        </HoverCardContent>
                    </HoverCard>

                    {/* Timer Control Button */}
                    {isStudyStarted && (
                        <HoverCard>
                            <HoverCardTrigger>
                                <Button variant="ghost" size="icon" onClick={handleToggleTimer}>
                                    {isTimerRunning ? (
                                        <CirclePause className={iconStyle} />
                                    ) : (
                                        <CirclePlay className={iconStyle} />
                                    )}
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-full text-center">
                                {isTimerRunning ? (
                                    <p className="text-muted-foreground">Pause</p>
                                ) : (
                                    <p className="text-muted-foreground">Play</p>
                                )}
                            </HoverCardContent>
                        </HoverCard>
                    )}

                    {/* Reset Timer Dialog */}
                    {isStudyStarted && (
                        <Dialog open={openResetDialog} onOpenChange={setOpenResetDialog}>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <RotateCcw className={iconStyle} />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-blue-800">
                                        Are you sure you want to restart your time?
                                    </DialogTitle>
                                    <DialogDescription>
                                        This action will restart the timer to 30 minutes and you may lose your progress.
                                    </DialogDescription>
                                    <DialogDescription className="flex justify-end gap-2 pt-8">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="text-primary"
                                            onClick={() => setOpenResetDialog(false)}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="bg-blue-800 hover:bg-blue-800/90"
                                            onClick={handleResetTimer}
                                        >
                                            Confirm
                                        </Button>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    )}

                    {/* End Simulation Button - Only appears if the study is started */}
                    {isStudyStarted && (
                        <Button size="sm" className="ml-2 bg-blue-800 hover:bg-blue-800/90">
                            End Simulation
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default ChatNavbar;