// "use client";

// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
// import { Button } from "./ui/button";
// import { useEffect, useState, useRef } from "react";
// import { LoaderCircle } from "lucide-react";
// import { useTimer } from "./timer-context";

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"

// interface CaseStudySectionProps {
//     caseStudyTitle: string;
//     caseStudyDescription: string;
//     caseStudyBackground: string;
//     objective: string;
//     question1: string;
//     question2: string;
//     question3: string;
// }

// const CaseStudySection: React.FC<CaseStudySectionProps> = ({
//     caseStudyTitle,
//     caseStudyDescription,
//     caseStudyBackground,
//     objective,
//     question1,
//     question2,
//     question3
// }) => {
//     const { startTimer, timerReset, setStudyStarted, isTimerRunning } = useTimer();
//     const [loading, setLoading] = useState(false);
//     const [started, setStarted] = useState(false);

//     const contentRef = useRef<HTMLDivElement | null>(null);

//     const handleStartClick = () => {
//         console.log("Starting Case Study...");
//         setLoading(true);

//         setTimeout(() => {
//             setLoading(false);
//             setStarted(true);
//             startTimer();
//             setStudyStarted(true);
//         }, 2000); // Simulate loading delay (e.g., 2 seconds)
//     };

//     // Monitor if the timer actually starts
//     useEffect(() => {
//         if (started) {
//             console.log("Timer status after starting case study:", isTimerRunning);
//         }
//     }, [isTimerRunning, started]);

//     // Reset the component's state when the timer is reset
//     useEffect(() => {
//         if (timerReset) {
//             console.log("Resetting Case Study State...");
//             setLoading(false);
//             setStarted(false);
//             setStudyStarted(false);
//         }
//     }, [timerReset, setStudyStarted]);

//     return (
//         <Card className="w-full h-[550px] flex flex-col">
//             {!started ? (
//                 // Initial State - Before the button is pressed
//                 <div className="flex flex-col justify-center items-center h-full text-center py-8 px-12">
//                     <h1 className="text-2xl font-semibold mb-4">{caseStudyTitle}</h1>
//                     <p className="text-sm text-muted-foreground mb-8">{caseStudyDescription}</p>
//                     {loading ? (
//                         <Button disabled className="w-1/2 bg-blue-800 hover:bg-blue-800/90">
//                             <div className="animate-spin">
//                                 <LoaderCircle className="w-4 h-4 text-primary-foreground" />
//                             </div>
//                         </Button>
//                     ) : (
//                         <Button onClick={handleStartClick} className="w-1/2 bg-blue-800 hover:bg-blue-800/90">
//                             Start Case Study
//                         </Button>
//                     )}
//                 </div>
//             ) : (
//                 <>
//                     <CardHeader className="border-b">
//                         <CardTitle>
//                             <div className="text-start">
//                                 <h1>{caseStudyTitle}</h1>
//                                 <p className="mt-2 text-sm text-muted-foreground font-normal">
//                                     {caseStudyDescription}
//                                 </p>
//                             </div>
//                         </CardTitle>
//                     </CardHeader>
//                     <CardContent ref={contentRef} className="w-full p-4 flex-grow overflow-y-auto">
//                         <div className="flex flex-col items-start w-full">
//                             <div className="mb-4">
//                                 <p className="text-sm font-semibold">
//                                     Background: <span className="font-normal text-muted-foreground">{caseStudyBackground}</span>
//                                 </p>
//                             </div>
//                             <div className="mb-4">
//                                 <p className="text-sm font-semibold">
//                                     Objective: <span className="font-normal text-muted-foreground">{objective}</span>
//                                 </p>
//                             </div>
//                             <div className="mb-4">
//                                 <h3 className="text-lg font-semibold">Key Questions:</h3>
//                                 <div className="w-full">
//                                     <Accordion type="single" collapsible>
//                                         <AccordionItem value="item-1">
//                                             <AccordionTrigger>Question 1</AccordionTrigger>
//                                             <AccordionContent>
//                                                 {question1}
//                                             </AccordionContent>
//                                         </AccordionItem>
//                                     </Accordion>
//                                     <Accordion type="single" collapsible>
//                                         <AccordionItem value="item-1">
//                                             <AccordionTrigger>Question 2</AccordionTrigger>
//                                             <AccordionContent>
//                                                 {question2}
//                                             </AccordionContent>
//                                         </AccordionItem>
//                                     </Accordion>
//                                     <Accordion type="single" collapsible>
//                                         <AccordionItem value="item-1">
//                                             <AccordionTrigger>Question 3</AccordionTrigger>
//                                             <AccordionContent>
//                                                 {question3}
//                                             </AccordionContent>
//                                         </AccordionItem>
//                                     </Accordion>
//                                 </div>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </>
//             )}
//         </Card>
//     );
// };

// export default CaseStudySection;

"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import { LoaderCircle } from "lucide-react";
import { useTimer } from "./timer-context";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface CaseStudySectionProps {
    caseStudyTitle: string;
    caseStudyDescription: string;
    caseStudyBackground: string;
    objective: string;
    question1: string;
    question2: string;
    question3: string;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({
    caseStudyTitle,
    caseStudyDescription,
    caseStudyBackground,
    objective,
    question1,
    question2,
    question3
}) => {
    const { startTimer, timerReset, setStudyStarted, isTimerRunning } = useTimer();
    const [loading, setLoading] = useState(false);
    const [started, setStarted] = useState(false);

    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleStartClick = () => {
        console.log("Starting Case Study...");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setStarted(true);
            startTimer();
            setStudyStarted(true);
        }, 2000); // Simulate loading delay (e.g., 2 seconds)
    };

    // Monitor if the timer actually starts
    useEffect(() => {
        if (started) {
            console.log("Timer status after starting case study:", isTimerRunning);
        }
    }, [isTimerRunning, started]);

    // Reset the component's state when the timer is reset
    useEffect(() => {
        if (timerReset) {
            console.log("Resetting Case Study State...");
            setLoading(false);
            setStarted(false);
            setStudyStarted(false);
        }
    }, [timerReset, setStudyStarted]);

    return (
        <Card className="w-full dark:bg-[#1D1D20] h-[550px] flex flex-col">
            {!started ? (
                // Initial State - Before the button is pressed
                <div className="flex flex-col justify-center items-center h-full text-center py-8 px-12">
                    <h1 className="text-2xl font-semibold mb-4">{caseStudyTitle}</h1>
                    <p className="text-sm text-muted-foreground mb-8">{caseStudyDescription}</p>
                    {loading ? (
                        <Button disabled className="w-1/2 bg-blue-800 hover:bg-blue-800/90">
                            <div className="animate-spin">
                                <LoaderCircle className="w-4 h-4 text-primary-foreground dark:text-primary" />
                            </div>
                        </Button>
                    ) : (
                        <Button onClick={handleStartClick} className="w-1/2 bg-blue-800 hover:bg-blue-800/90">
                            Start Case Study
                        </Button>
                    )}
                </div>
            ) : (
                <>
                    <CardHeader className="border-b">
                        <CardTitle>
                            <div className="text-start">
                                <h1>{caseStudyTitle}</h1>
                                <p className="mt-2 text-sm text-muted-foreground font-normal">
                                    {caseStudyDescription}
                                </p>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent ref={contentRef} className="w-full p-4 flex-grow overflow-y-auto">
                        <div className="flex flex-col items-start w-full">
                            <div className="mb-4 w-full">
                                <p className="text-sm font-semibold">
                                    Background: <span className="font-normal text-muted-foreground">{caseStudyBackground}</span>
                                </p>
                            </div>
                            <div className="mb-4 w-full">
                                <p className="text-sm font-semibold">
                                    Objective: <span className="font-normal text-muted-foreground">{objective}</span>
                                </p>
                            </div>
                            <div className="mb-4 w-full">
                                <h3 className="text-md font-semibold">Key Questions:</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1" className="w-full">
                                        <AccordionTrigger className="w-full">Question 1</AccordionTrigger>
                                        <AccordionContent className="w-full">
                                            {question1}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2" className="w-full">
                                        <AccordionTrigger className="w-full">Question 2</AccordionTrigger>
                                        <AccordionContent className="w-full">
                                            {question2}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3" className="w-full">
                                        <AccordionTrigger className="w-full">Question 3</AccordionTrigger>
                                        <AccordionContent className="w-full">
                                            {question3}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </CardContent>
                </>
            )}
        </Card>
    );
};

export default CaseStudySection;