import React from 'react'
import { BackgroundGradientDemo } from './compo'

export default function Features() {
  return (
    <div className='my-10 '>
        <div className=''>
            <h2 className='text-[2.6rem] font-bold text-center text-black'>Features</h2>
        </div>
        <div className=' mx-5 justify-center pt-10 sm:grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
        <BackgroundGradientDemo title={'Decentralized Storage'} desc={'Store your files on a decentralized network for enhanced security and reliability.'} img={'/decen.svg'} height={300} width={300} classs={'object-contain p-3 '}/>
        <BackgroundGradientDemo title={'Customizable Access Periods'} desc={'Set specific access periods for your documents, ensuring only authorized users can view them during designated times.'} img={'/time.svg'} height={170} width={170} classs={'p-3 object-contain mx-auto'}/>
        <BackgroundGradientDemo title={'User Permissions Management'} desc={'Easily manage who can access your files with flexible user permissions.'} img={'/users.svg'} height={400} width={400} classs={'object-contain mb-8 p-3'}/>
        <BackgroundGradientDemo title={'Enhanced Security'} desc={'Benefit from advanced encryption and secure access controls to keep your documents safe.'} img={'/secure.svg'} height={300} width={300} classs={'object-contain mb-[45px] p-3 '}/>
        </div>
    </div>
  )
}
