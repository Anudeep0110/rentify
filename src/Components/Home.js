import React from 'react'

const Home = () => {
  return (
    <div className='h-full'>
        <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-8 w-3/5">
          <h2 className="text-4xl font-bold mb-4">Rentify - Where Renting Meets Simplicity</h2>
          <p className="text-gray-700 mb-8 font-semibold">
            The entire world is slowly recovering from the pandemic, and everything is coming back to normal. People are resuming their daily routines, with schools, colleges, movie theatres, and restaurants operating almost fully. Work from home has also reduced significantly as offices reopen, and people return to their workplaces, including immigrants.
            <br /><br />
            However, there is a high demand for real estate once again. Rents have increased, making it challenging to find rental properties, especially in cities with high populations and IT offices. Rentify aims to bridge this gap by helping owners find the right tenants and assisting tenants in finding the perfect house based on their key requirements.
          </p>
          <input 
            type="text" 
            placeholder="Search for properties..." 
            className="w-full max-w-md mx-auto p-2 border border-gray-300 rounded"
          />
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Featured Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <img src="property1.jpg" alt="Property 1" className="w-full h-48 object-cover rounded mb-4" />
              <h4 className="text-xl font-bold">Beautiful Apartment</h4>
              <p className="text-gray-600">City Center, $1200/month</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="property2.jpg" alt="Property 2" className="w-full h-48 object-cover rounded mb-4" />
              <h4 className="text-xl font-bold">Modern Studio</h4>
              <p className="text-gray-600">Suburbs, $800/month</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="property3.jpg" alt="Property 3" className="w-full h-48 object-cover rounded mb-4" />
              <h4 className="text-xl font-bold">Cozy House</h4>
              <p className="text-gray-600">Countryside, $1500/month</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded">
          <h3 className="text-2xl font-semibold mb-4">About Rentify</h3>
          <p>
            Rentify is your go-to app for finding the best rental properties in your area.
            Whether you're looking for an apartment in the city or a house in the countryside, 
            we have something for everyone.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Rentify. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home