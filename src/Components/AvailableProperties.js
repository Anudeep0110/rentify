import React from 'react'
import NavbarComp from './NavbarComp'

const AvailableProperties = () => {

    const [properties,setProperties] = React.useState([])

  return (
    <div className='min-h-screen flex flex-col bg-slate-100'>
        <NavbarComp />
        <div className='h-full flex flex-col w-full border'>
            
        </div>
    </div>
  )
}

export default AvailableProperties