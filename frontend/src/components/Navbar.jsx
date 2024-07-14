import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Navbar = ({ user }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <nav className='h-16 w-screen bg-orange-400 flex justify-between items-center px-8 shadow-2xl fixed'>
            <h1 className='text-3xl font-bold cursor-pointer'
                onClick={() => navigate('/')}
            >TensorGo</h1>
            <div className='flex gap-2 font-semibold'>
                {
                    !user ? <>
                        <button className='cursor-pointer' onClick={() => navigate('/login')}>Login</button>
                        <button className='cursor-pointer' onClick={() => navigate('/register')}>Register</button>
                    </> : <button className='cursor-pointer'>Logout</button>
                }
            </div>
        </nav>
    )
}

export default Navbar