import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/toggle-button'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-2 px-4 flex justify-between items-center text-black   w-full fixed z-50 bg-transparent'>
        <div className='logo'>
            <Image src={'/logo.webp'} alt={'logo'} width={40} height={40} />
        </div>
        <div className='gap-3 flex font-semibold'>
            <div className='gap-2 flex'>
            <Button variant={'default'} className='bg-purple-400  dark:text-white hover:bg-purple-600 font-semibold '>Sign up</Button>
            <Button variant={'outline'} className=' bg-transparent border-violet-900 text-white'>Login</Button>
            </div>
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar