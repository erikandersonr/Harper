// "use client";

// import { useParams } from "next/navigation";
// import { useEffect } from "react";
// import AnswerSection from "@/components/answer-section";
// import CaseStudySection from "@/components/case-study-section";
// import { TimerProvider } from "@/components/timer-context";
// import { caseStudies } from "@/lib/caseStudies";

// const ChatPage = () => {
//     const params = useParams();
//     const caseStudyId = params.caseStudyId as string;

//     // Find the relevant case study by ID from the data
//     const caseStudy = caseStudies.find((study) => study.id === caseStudyId);

//     useEffect(() => {
//         if (!caseStudy) {
//             // In a real-world application, you could also render a 404 page here
//             console.error("Case study not found");
//         }
//     }, [caseStudy]);

//     // Render loading state until the case study is available
//     if (!caseStudy) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-12 gap-6">
//             <CaseStudySection
//                 caseStudyTitle={caseStudy.title}
//                 caseStudyDescription={caseStudy.cardContent}
//             />
//             {/* Answer/chat section */}
//             <AnswerSection />
//         </div>
//     );
// };

// export default ChatPage;

"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import AnswerSection from "@/components/answer-section";
import CaseStudySection from "@/components/case-study-section";
import { TimerProvider } from "@/components/timer-context";
import { caseStudies } from "@/lib/caseStudies";

const ChatPage = () => {
    const params = useParams();
    const caseStudyId = params.caseStudyId as string;

    // Find the relevant case study by ID from the data
    const caseStudy = caseStudies.find((study) => study.id === caseStudyId);

    useEffect(() => {
        if (!caseStudy) {
            // In a real-world application, you could also render a 404 page here
            console.error("Case study not found");
        }
    }, [caseStudy]);

    // Render loading state until the case study is available
    if (!caseStudy) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-12 gap-6">
            <CaseStudySection
                caseStudyTitle={caseStudy.title}
                caseStudyDescription={caseStudy.cardContent}
                caseStudyBackground={caseStudy.background}
                objective={caseStudy.objective}
                question1={caseStudy.question1}
                question2={caseStudy.question2}
                question3={caseStudy.question3}
            />
            {/* Answer/chat section */}
            <AnswerSection />
        </div>
    );
};

export default ChatPage;