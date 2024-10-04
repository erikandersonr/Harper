// 'use client'

// import { Button } from '@/components/ui/button'
// import * as Clerk from '@clerk/elements/common'
// import * as SignIn from '@clerk/elements/sign-in'
// import FcGoogle from "react-icons"

// export default function SignInPage() {
//   return (
//     <div className="grid w-full flex-grow items-center bg-background min-h-screen px-16 sm:justify-center">
//       <SignIn.Root>
//         <SignIn.Step
//           name="start"
//           className="w-full flex-grow space-y-6 rounded-2xl bg-background border shadow-sm py-16 sm:w-96 sm:px-8"
//         >
//           <header className="text-center">
//             <h1 className="text-2xl text-blue-800 font-semibold">
//               Sign in to HarperAI
//             </h1>
//           </header>
//           <Clerk.GlobalError className="block text-sm text-red-400" />
//           <div className="space-y-2 items-center flex justify-center">
//             <Clerk.Connection
//               name="google"
//             >
//               <Button variant="outline" size="lg" className='w-7/8'>
//                 Sign in with Google
//               </Button>
//             </Clerk.Connection>
//           </div>
//         </SignIn.Step>
//       </SignIn.Root>
//     </div>
//   )
// }

'use client'

import { Button } from '@/components/ui/button'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'

export default function SignInPage() {
    return (
        <div className="grid w-full min-h-screen h-full flex-grow items-center px-16 sm:justify-center bg-background">
            <SignIn.Root>
                <SignIn.Step
                    name="start"
                    className="w-full flex-grow space-y-6 rounded-2xl bg-white border shadow-md bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 py-10 ring-1 ring-inset ring-white/5 sm:w-96 sm:px-8"
                >
                    <header className="flex justify-center">
                        <h1 className='text-2xl font-semibold'>Sign in to <span className='text-blue-800'>Harper</span></h1>
                    </header>
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <div className="space-y-2 flex justify-center">
                        <Clerk.Connection
                            name="google"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full"
                            >
                                <FcGoogle className="size-5 mr-2" />
                                Continue with Google
                            </Button>
                        </Clerk.Connection>
                    </div>
                    <p className='text-sm text-muted-foreground text-center'>By signing into Harper, you accept our <span className='hover:underline cursor-pointer'>Terms and Conditions</span></p>
                </SignIn.Step>
            </SignIn.Root>
        </div>
    )
}