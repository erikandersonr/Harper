"use client";

import { LoaderCircle } from "lucide-react";
import { useTimer } from "./timer-context";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

interface CaseStudySectionProps {
    caseStudyTitle: string;
    caseStudyDescription: string;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ caseStudyTitle, caseStudyDescription }) => {
    const { startTimer, timerReset, setStudyStarted, isTimerRunning } = useTimer();
    const [loading, setLoading] = useState(false);
    const [started, setStarted] = useState(false);

    const handleStartClick = () => {
        console.log("Starting Case Study..."); // Debugging log
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setStarted(true);
            startTimer(); // Start the timer after loading is complete
            setStudyStarted(true); // Set study started status to true
        }, 2000); // Simulate loading delay (e.g., 2 seconds)
    };

    // Monitor if the timer actually starts
    useEffect(() => {
        if (started) {
            console.log("Timer status after starting case study:", isTimerRunning); // Debugging log
        }
    }, [isTimerRunning, started]);

    // Reset the component's state when the timer is reset
    useEffect(() => {
        if (timerReset) {
            console.log("Resetting Case Study State..."); // Debugging log
            setLoading(false);
            setStarted(false);
            setStudyStarted(false); // Reset study started status
        }
    }, [timerReset, setStudyStarted]);

    return (
        <Card className="w-full h-[550px] flex flex-col justify-center items-center text-center">
            <CardHeader>
                <CardTitle>{started ? "Case Study In Progress" : caseStudyTitle}</CardTitle>
                {!started && <CardDescription className="lg:px-8">{caseStudyDescription}</CardDescription>}
            </CardHeader>
            <CardContent className="w-full">
                {loading ? (
                    <Button disabled className="w-1/2 bg-blue-800 hover:bg-blue-800/90">
                        <div className="animate-spin">
                            <LoaderCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                    </Button>
                ) : started ? (
                    <div className="flex flex-col items-center">
                        <p className="text-sm text-gray-700 mb-4">
                            You are now working on the case study. Good luck!
                        </p>
                        <Button className="w-1/2 bg-blue-800 hover:bg-blue-800/90" disabled>
                            Case Study In Progress
                        </Button>
                    </div>
                ) : (
                    <Button onClick={handleStartClick} className="w-1/2 bg-blue-800 hover:bg-blue-800/90">
                        Start Case Study
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default CaseStudySection;