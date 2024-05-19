import React from 'react'
import NavbarComp from './NavbarComp'

const Property = () => {
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col'>
        <NavbarComp />
        <div className='h-full flex flex-col w-full border'>
        <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-1 ">
            <img src="property1.jpg" alt="Main Property" className="w-full h-[400px] object-contain rounded" />
          </div>
        </section>
        <section className='flex justify-center gap-48'>
        <section className="mb-8">
          <h3 className="text-4xl font-bold mb-2">Details</h3>
          <ul className="list-disc list-inside font-semibold text-xl text-gray-700">
            <li>Rent: $1200/month</li>
            <li>Location: City Center</li>
            <li>Bedrooms: 2</li>
            <li>Bathrooms: 2</li>
            <li>Square Feet: 1,200 sqft</li>
          </ul>
        </section>

        <section className="mb-8 text-4xl font-bold">
          <h3 className="text-4xl font-semibold mb-4">Seller Details</h3>
          <ul className="list-disc list-inside font-semibold text-xl text-gray-700">
            <li>First Name: $1200/month</li>
            <li>Last Name: City Center</li>
            <li>Email ID: 2</li>
            <li>Phone No.: 2</li>
          </ul>
        </section>
        </section>
       
      </main>
        </div>
    </div>
  )
}

export default Property