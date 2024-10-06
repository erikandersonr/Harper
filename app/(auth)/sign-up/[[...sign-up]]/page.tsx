'use client'

import { Button } from '@/components/ui/button'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'

export default function SignUpPage() {
    return (
        <div className="grid w-full min-h-screen h-full flex-grow items-center px-16 sm:justify-center bg-background dark:bg-[#121212]">
            <SignIn.Root>
                <SignIn.Step
                    name="start"
                    className="w-full flex-grow space-y-6 rounded-2xl bg-background dark:bg-[#1D1D20] border shadow-md sm:w-96 py-10 sm:px-8"
                >
                    <header className="flex justify-center">
                        <h1 className='text-2xl font-semibold dark:text-primary'>Sign in to <span className='text-blue-800 dark:text-blue-600'>Harper</span></h1>
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