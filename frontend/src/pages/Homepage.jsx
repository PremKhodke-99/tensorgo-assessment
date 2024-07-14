import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

    const navigate = useNavigate();

  return (
    <section className='mt-16 p-6'>
        <div className='flex justify-center items-center flex-col gap-4'>
            <h1>Browse Plans</h1>
            <button onClick={() => navigate('/plan')} className='bg-orange-500 p-2 text-white rounded-lg font-bold hover:bg-orange-600 w-[10%]'>Plans</button>
        </div>
    </section>
  )
}

export default Homepage