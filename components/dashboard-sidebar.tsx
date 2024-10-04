// 'use client';

// import { Home, FileText, Users, Settings } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { cn } from "@/lib/utils";
// import { UserButton, useUser } from '@clerk/nextjs';

// export default function DashboardSidebar() {
//     const pathname = usePathname();
//     const [activeItem, setActiveItem] = useState(pathname);

//     const { isSignedIn, user, isLoaded } = useUser()

//     const navItems = [
//         { icon: Home, label: 'Dashboard', href: '/dashboard' },
//         { icon: Users, label: 'Feedback History', href: '/dashboard/history' },
//         { icon: FileText, label: 'Resources', href: '/dashboard/resources' },
//         { icon: Settings, label: 'Billing Settings', href: '/dashboard/settings' },
//     ];

//     return (
//         <aside className="bg-background h-full flex flex-col justify-between">
//             <nav className="p-5 space-y-2">
//                 {navItems.map((item) => (
//                     <Link
//                         key={item.href}
//                         href={item.href}
//                         onClick={() => setActiveItem(item.href)}
//                         className={cn(
//                             "flex items-center space-x-3 p-2 rounded-lg transition-all duration-200",
//                             activeItem === item.href
//                                 ? "bg-muted/90 text-blue-800"
//                                 : "text-muted-foreground hover:bg-muted"
//                         )}
//                         aria-current={activeItem === item.href ? 'page' : undefined}
//                     >
//                         {/* <item.icon className="h-5 w-5" /> */}
//                         <span className='font-medium text-sm'>{item.label}</span>
//                     </Link>
//                 ))}
//             </nav>

//             {/* Footer with the heading "harper" */}
//             <footer className="p-5 border-t">
//                 <div className='flex gap-2'>
//                     <UserButton />
//                     <div>
//                         <h1 className='text-sm'>{user?.fullName}</h1>
//                         <p className='text-xs text-muted-foreground'>{user?.primaryEmailAddress?.emailAddress}</p>
//                     </div>
//                 </div>
//             </footer>
//         </aside>
//     );
// }

"use client";

import { Home, FileText, Users, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { UserButton, useUser } from '@clerk/nextjs';

export default function DashboardSidebar() {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(pathname);

    const { isSignedIn, user, isLoaded } = useUser();

    const navItems = [
        { icon: Home, label: 'Dashboard', href: '/dashboard' },
        { icon: Users, label: 'Feedback History', href: '/dashboard/history' },
        { icon: FileText, label: 'Resources', href: '/dashboard/resources' },
        { icon: Settings, label: 'Billing Settings', href: '/dashboard/settings' },
    ];

    return (
        <aside className="bg-background h-full flex flex-col justify-between overflow-y-auto">
            <nav className="p-5 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveItem(item.href)}
                        className={cn(
                            "flex items-center space-x-3 p-2 rounded-lg transition-all duration-200",
                            activeItem === item.href
                                ? "bg-muted/90 text-blue-800"
                                : "text-muted-foreground hover:bg-muted"
                        )}
                        aria-current={activeItem === item.href ? 'page' : undefined}
                    >
                        {/* You can uncomment this line to include the icons */}
                        {/* <item.icon className="h-5 w-5" /> */}
                        <span className='font-medium text-sm'>{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Footer with the heading "harper" */}
            <footer className="p-5 border-t">
                <div className='flex gap-2'>
                    <UserButton />
                    <div>
                        <h1 className='text-sm'>{user?.fullName}</h1>
                        <p className='text-xs text-muted-foreground'>{user?.primaryEmailAddress?.emailAddress}</p>
                    </div>
                </div>
            </footer>
        </aside>
    );
}