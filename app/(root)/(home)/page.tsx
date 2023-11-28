import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { join } from 'path'

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/'/>
      <h1 className='h1-bold'>Next 14 We're coming!</h1>
      <h2 className='h2-bold'>Next 14 We're coming!</h2>
      <h3 className='h3-bold'>Next 14 We're coming!</h3>
    </div>
  )
}
 