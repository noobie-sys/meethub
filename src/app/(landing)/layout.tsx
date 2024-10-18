import { ModeToggle } from '@/components/ui/toggle-button'
import React from 'react'
import Navbar from './_components/Navbar'

type Props = {
    children : React.ReactNode
}

const LandingPageLayout = ({children}: Props) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default LandingPageLayout