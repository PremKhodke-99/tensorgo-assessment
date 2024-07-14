import React from 'react'

const PlanCard = ({ plan, amount, limit, description }) => {
    return (
        <div className='h-4/6 w-[80%] bg-orange-50 rounded-lg shadow-lg p-10 flex flex-col justify-between hover:scale-105 duration-500'>
            <h1 className='text-6xl font-bold'>{plan}</h1>
            {amount && <h1 className='text-xl font-bold'>$ {amount}</h1>}
            {description && <p className='text-xl font-bold'>{description}</p>}
            <h3 className='text-[22px]'><span className='text-gray-500'>Limit:</span> {limit}</h3>
            <button className='bg-orange-500 py-4 rounded-lg text-white font-medium text-lg hover:bg-orange-600 duration-200'>Buy Plan</button>
        </div>
    )
}

export default PlanCard