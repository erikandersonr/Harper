// // 'use client'

// // import { Home, FileText, Users, Settings } from 'lucide-react'
// // import Link from 'next/link'
// // import { useState } from 'react'
// // import { usePathname } from 'next/navigation'
// // import { cn } from "@/lib/utils"

// // export default function DashboardSidebar() {
// //   const pathname = usePathname()
// //   const [activeItem, setActiveItem] = useState(pathname)

// //   const navItems = [
// //     { icon: Home, label: 'Dashboard', href: '/dashboard' },
// //     { icon: Users, label: 'Feedback History', href: '/dashboard/history' },
// //     { icon: FileText, label: 'Resources', href: '/dashboard/resources' },
// //     { icon: Settings, label: 'Billing Settings', href: '/dashboard/settings' },
// //   ]

// //   return (
// //     <aside className="bg-background h-screen">
// //       <nav className="p-5 space-y-2">
// //         {navItems.map((item) => (
// //           <Link
// //             key={item.href}
// //             href={item.href}
// //             onClick={() => setActiveItem(item.href)}
// //             className={cn(
// //               "flex items-center space-x-3 p-2 rounded-lg transition-all duration-200",
// //               activeItem === item.href
// //                 ? "bg-muted/90 text-blue-800"
// //                 : "text-muted-foreground hover:bg-muted"
// //             )}
// //             aria-current={activeItem === item.href ? 'page' : undefined}
// //           >
// //             {/* <item.icon className="h-5 w-5" /> */}
// //             <span className='font-medium text-sm'>{item.label}</span>
// //           </Link>
// //         ))}
// //       </nav>
// //     </aside>
// //   )
// // }

// 'use client';

// import { Home, FileText, Users, Settings } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { cn } from "@/lib/utils";

// export default function DashboardSidebar() {
//   const pathname = usePathname();
//   const [activeItem, setActiveItem] = useState(pathname);

//   const navItems = [
//     { icon: Home, label: 'Dashboard', href: '/dashboard' },
//     { icon: Users, label: 'Feedback History', href: '/dashboard/history' },
//     { icon: FileText, label: 'Resources', href: '/dashboard/resources' },
//     { icon: Settings, label: 'Billing Settings', href: '/dashboard/settings' },
//   ];

//   return (
//     <aside className="bg-background h-screen flex flex-col justify-between">
//       <nav className="p-5 space-y-2">
//         {navItems.map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             onClick={() => setActiveItem(item.href)}
//             className={cn(
//               "flex items-center space-x-3 p-2 rounded-lg transition-all duration-200",
//               activeItem === item.href
//                 ? "bg-muted/90 text-blue-800"
//                 : "text-muted-foreground hover:bg-muted"
//             )}
//             aria-current={activeItem === item.href ? 'page' : undefined}
//           >
//             <span className='font-medium text-sm'>{item.label}</span>
//           </Link>
//         ))}
//       </nav>
      
//       {/* Footer with the heading "harper" */}
//       <footer className="p-5 text-center">
//         <h2 className="text-sm font-semibold text-muted-foreground">Harper</h2>
//       </footer>
//     </aside>
//   );
// }

'use client';

import { Home, FileText, Users, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

export default function DashboardSidebar() {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(pathname);

    const navItems = [
        { icon: Home, label: 'Dashboard', href: '/dashboard' },
        { icon: Users, label: 'Feedback History', href: '/dashboard/history' },
        { icon: FileText, label: 'Resources', href: '/dashboard/resources' },
        { icon: Settings, label: 'Billing Settings', href: '/dashboard/settings' },
    ];

    return (
        <aside className="bg-background h-full flex flex-col justify-between">
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
                        {/* <item.icon className="h-5 w-5" /> */}
                        <span className='font-medium text-sm'>{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Footer with the heading "harper" */}
            <footer className="p-5 text-center">
                <h2 className="text-2xl text-blue-800 font-semibold">HarperAI</h2>
            </footer>
        </aside>
    );
}