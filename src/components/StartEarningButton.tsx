'use client'
import React from 'react'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function StartEarningButton() {
    const { data: session } = useSession();

    return (
        <Button className={`${session?.user?.id ? "sticky" : 'hidden'}  bottom-6 left-[85%] rounded-full h-12 px-10`}>
            <Link href='/auto_like'>    Start Earning</Link>

        </Button>
    )
}
