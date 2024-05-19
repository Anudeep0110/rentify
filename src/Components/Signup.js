import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center min-h-screen bg-slate-100'>
        <div class=" flex flex-col items-center justify-center bg-indigo-100 w-2/6 h-5/6">
          <form class="w-full rounded-lg">
            <div class="flex font-bold justify-center mt-6">
            </div>
            <h2 class="text-2xl text-center uppercase font-semibold text-gray-900 mb-8">SignUp Here</h2>
            <div class="px-12 pb-10">
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                  />
                </div>
              </div>
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                  />
                </div>
              </div>
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="text"
                    placeholder="Email Address"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                  />
                </div>
              </div>
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                  />
                </div>
              </div>
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="password"
                    placeholder="Password"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                  />
                </div>
              </div>
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                  />
                </div>
              </div>
              <button
                type="submit"
                class="
                  w-full
                  py-2
                  mt-8
                  rounded-full
                  bg-blue-400
                  text-gray-100
                  focus:outline-none
                "
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
        <p className='font-semibold'>Already Have an account? Please <a className='text-blue-400 underline' href='/login'>Login</a></p>
    </div>
  )
}

export default Login
