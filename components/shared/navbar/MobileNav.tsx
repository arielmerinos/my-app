import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Image src='/assets/icons/hamburger.svg' alt='Menu' width={36} height={36} className='invert-colors sm:hidden'/>
        </SheetTrigger>
        <SheetContent side='left' className='background-light900_dark200 border-none'>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                src='/assets/images/site-logo.svg'
                width={23}
                height={23}
                alt='OverflowDev Logo'
                />
                <p className='h2-bold text-dark-100_light900 font-spaceGrotesk dark:text-light-900 max-sm:hidden'> Dev <span className='text-primary-500'>Overflow</span></p>
            </Link >
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav