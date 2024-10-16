import React from 'react'

type Props = {
    children : React.ReactNode
}

const LandingPageLayout = ({children}: Props) => {
  return (
    <div>
        {/* <Navbar /> */}
        {children}
    </div>
  )
}

export default LandingPageLayout