'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import {Input} from '@/components/ui/input'

const GlobalSearch = () => {

  const [search, setSearch] = useState('')

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
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
        className='paragraph-regular no-focus placehorder background-light800_darkgradient border-none shadow-none outline-none text-dark400_light700 '/>
      </div>
    </div>
  )
}

export default GlobalSearch