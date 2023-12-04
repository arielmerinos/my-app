'use client'
import React from 'react'
import { SignedOut } from '@clerk/nextjs'
import  Link from 'next/link'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import { SheetClose } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'


const LeftSideBar = () => {
    const pathName = usePathname();
    let isActive = false;
  return (
    <section className=' flex h-screen flex-col min-w-[120px] z-10 background-light900_dark200 text-dark400_light700 items-center justify-between overflow-y-auto border-r pt-36 p-6 dark:shadow-none shadow-light-300 max-sm:hidden sticky left-0 lg:w-[266px] top-0light-border'>
        <div className='flex flex-col mb-16'>
        {sidebarLinks.map((item) => {
            isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route;
                return (
                <Link 
                    href={item.route}
                    key={item.route}
                    className={`${isActive ? 'primary-gradient rounded-lg text-light-900': 'text-dark300_light900 '} flex items-center max-md:justify-center gap-4 bg-transparent p-4 max-xl:justify-start  mt-8`}
                >
                    <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={`${isActive ? '':'invert-colors'}`}
                    />
                    <p className={`${isActive ? 'base-bold': ' base-medium'} max-md:hidden`}>{item.label}</p>
                </Link>)})}
        </div>
        <SignedOut>
        <div className='flex flex-col gap-6 w-full '>
                <Link 
                className=''
                href='/sign-in'>
                    <Button className=' w-full primary-gradient small-medium btn-secondary min-h-[20px] rounded-lg px-2 py-3 shadow-none'>
                        <Image 
                        src={'/assets/icons/avatar.svg'}
                        alt='sign up image'
                        width={20}
                        height={20}
                        className='cursor-pointer max-sm:hidden lg:hidden  rounded-lg '
                        />
                    </Button>
                </Link>  

                <Link href='/sign-'>
                    <Button className='w-full small-medium light-border-2 btn-tertiary min-h-[20px] text-dark400_light900 rounded-lg px-2 py-3 shadow-none'>
                    <span className='text-dark400_light900'>Sign Up </span>
                    </Button>
                </Link>  
            </div>
        </SignedOut>
    </section>
  )
}

export default LeftSideBar