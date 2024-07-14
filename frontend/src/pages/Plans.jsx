import React from 'react'
import PlanCard from '../components/PlanCard'

const Plans = () => {
    const data = [
        {
            plan: "Basic",
            limit: 1,
            description: "Free for 14 days"
        },
        {
            plan: "Standard",
            amount: 4999,
            limit: "Upto 5 Users",
        },
        {
            plan: "Plus",
            amount: 3999,
            limit: "Above 10 Users",
        },
    ]
    return (
        <section className='mt-16 p-4'>
            <h3 className='text-2xl font-bold'>Select Your Plan</h3>
            <div className='grid grid-cols-3 place-items-center h-[90vh]'>
                {
                    data.map((item) => <PlanCard
                        plan={item.plan}
                        amount={item.amount}
                        limit={item.limit}
                        description={item.description}
                    />)
                }
            </div>
        </section>
    )
}

export default Plans