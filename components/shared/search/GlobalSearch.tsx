'use client'
import React from 'react'
import Image from 'next/image'
import {Input} from '@/components/ui/input'

const GlobalSearch = () => {
  return (
    <div className='relative w-full max-w-[600px] max-lg:hidden'>
      <div className='background-light800_darkgradient relative flex min-h-[56px] items-center px-4 gap-1 rounded-xl'>
        <Image
        src='/assets/icons/search.svg'
        alt='search image'
        width={24}
        height={24}
        className='cursor-pointer'
        />
        <Input 
        type='text'
        placeholder='Search globally OverflowDev'
        value=''
        onChange={() => {}}
        className='paragraph-regular no-focus placehorder background-light800_darkgradient border-none shadow-none outline-none '/>
      </div>
    </div>
  )
}

export default GlobalSearch