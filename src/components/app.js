import React from 'react'
import UploadForm from './UploadForm'
import UnlockForm from './UnlockForm'
import Navbar from './navbar'


const App = () => {
  return (
    <div className=' min-w-full min-h-fit  mt-28' >
      <div>
        <p className='text-blue-500 text-4xl text-center pb-8 font-bold font-mono'>Your Files, Your Control</p>
      </div>
       <div className='main flex lg:flex-row md:flex-col flex-col  justify-around h-auto w-auto items-center py-6 '>
          <div className="1 bg-gray-200 box-border shadow-xl drop-shadow-lg md:min-h-[30rem] h-[30rem] md:w-[30rem] rounded-lg md:mx-0 mx-3 ">
                <div className='flex justify-center  p-5'><span className='text-black text-center text-2xl font-semibold tracking-wide '>Locker</span></div>
                    <div>
                        <UploadForm/>
                    </div>
          </div>
          <div className='border-r-2 h-72 lg:flex md:hidden hidden border-gray-400'></div>
          <div className='border-r-2 rotate-90 h-32 lg:hidden md:flex flex border-gray-400'></div>
          <div className="2 bg-gray-200 box-border shadow-xl drop-shadow-lg md:min-h-[30rem] md:w-[30rem] h-[20rem] min-w-[21rem] md:mx-0 mx-6  rounded-lg ">
            <div className='flex justify-center p-5'><span className='text-black text-center text-2xl font-semibold tracking-wide'>Unlocker</span></div>
                <UnlockForm/>
          </div>
       </div>
    </div>
  )
}

export default App
