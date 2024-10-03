import Link from "next/link";
import { Button } from "./ui/button";
import { AlignLeft, AlignRight, ArrowLeft } from "lucide-react";

const DashboardNavbar = () => {
    return (
        <header>
            <div className="px-8 py-8 border-b">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold">Your Dashboard</h1>
                        <p className="text-muted-foreground">View some example case studies that mimic top firms.</p>
                    </div>
                    <div className="sm:hidden block">
                        <Button variant="ghost" size="icon">
                            <AlignRight className="text-blue-800"/>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default DashboardNavbar;