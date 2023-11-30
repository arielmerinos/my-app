'use client'

import React from 'react'
import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { themes } from '@/constants'
  

const Theme = () => {

    const {mode, setMode} = useTheme();

  return (
    <Menubar className='relative border-none bg-transparend shadow-none'>
        <MenubarMenu>
            <MenubarTrigger
            className='focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200 dark:bg-dark-300'
            >
                {mode == 'light' ? (<Image src='/assets/icons/sun.svg' width={23} height={23} alt='OverflowDev Logo' />): (<Image src='/assets/icons/moon.svg' width={23} height={23} alt='OverflowDev Logo' />)
                }
            </MenubarTrigger>
            <MenubarContent
            className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:text-light-700'
            >
                {themes.map((item) => (
                    <MenubarItem
                    key={item.value}
                    onClick={() => setMode(item.value)}
                    
                    >
                        <Image 
                        src={item.icon}
                        alt={item.value}
                        width={16}
                        height={16}
                        className={`${mode === item.value && 'active-theme'}`}
                        />
                    </MenubarItem>))
                    }
            </MenubarContent>
        </MenubarMenu>
    </Menubar>

  )
}

export default Theme