import DashboardNavbar from "@/components/dashboard-navbar";
import DashboardSidebar from "@/components/dashboard-sidebar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies } from "@/lib/caseStudies";
import Link from "next/link";

const DashboardPage = () => {
    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <DashboardNavbar />

            <div className="flex flex-grow overflow-hidden">
                {/* Sidebar */}
                <div className="hidden md:block w-80 border-r h-full sticky top-0">
                    <DashboardSidebar />
                </div>

                {/* Main Content */}
                <div className="flex-grow overflow-y-auto p-8 w-full grid grid-cols-1 gap-y-8">
                    {caseStudies.map((caseStudy) => (
                        <Link key={caseStudy.id} href={`/dashboard/case-study/${caseStudy.id}`}>
                            <Card className="h-full hover:scale-[1.02] hover:shadow-md transition cursor-pointer">
                                <CardHeader className="border-b">
                                    <div className="mb-2">
                                        <Badge className="bg-green-100 hover:bg-green-200 text-green-500">{caseStudy.badge}</Badge>
                                    </div>
                                    <CardTitle className="text-blue-800">{caseStudy.title}</CardTitle>
                                    <CardDescription className="">{caseStudy.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-5">
                                    {caseStudy.cardContent}
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;