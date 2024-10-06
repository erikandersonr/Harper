"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { AlignLeft, AlignRight, ArrowLeft } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import DashboardSidebar from "./dashboard-sidebar"; // Import the sidebar component
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"; // Import Sheet from ShadCN

const DashboardNavbar = () => {
    const [open, setOpen] = useState(false); // State to control sheet visibility

    return (
        <header>
            <div className="px-8 dark:bg-[#121212] py-8 border-b">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex gap-2 items-center">
                            <h1 className="text-2xl font-semibold">Your Dashboard</h1>
                            <p className="hidden md:block text-xs bg-blue-800 dark:bg-blue-600 text-white px-2 py-1 rounded-full">Beta</p>
                        </div>
                        <p className="text-muted-foreground">View some example case studies that mimic top firms.</p>
                    </div>
                    {/* Mobile Sidebar Toggle Button */}
                    <div className="sm:hidden block">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                                    <AlignRight className="text-blue-800 dark:text-blue-600" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-[#121212]">
                                <DashboardSidebar />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default DashboardNavbar;