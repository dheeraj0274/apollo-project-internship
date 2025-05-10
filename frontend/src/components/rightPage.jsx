import React from 'react'
import doctors from '../styles/doctors.png'
import Image from 'next/image'


const RightPage = () => {
  return (
    <div className='w-[420px] h-full pl-17 hidden sm:block pt-10'>
        <div className='w-[200px] h-[300px] bg-blue-950 rounded-2xl flex flex-col items-center justify-center'>
            <div>
            <Image src={doctors} alt='logo'/>
            </div>
            <div className=''>
                <h1 className='text-white font-medium'>Need help Consult the <br/> right Doctor?</h1>

            </div>
            <p className='text-amber-100 pl-5 pt-3 font-bold text-[13px] underline'>Call +91-8054678978 to book instantly</p>
        </div>

    </div>
  )
}

export default RightPage