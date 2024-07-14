import React, { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: '',
    role: '',
    email: '',
    password: ''
  });
  const [viewPassword, setViewPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  }
  
  const handleViewPassword = (e) => {
    e.preventDefault();
    setViewPassword(prev => !prev);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:5000/api/user/register`, userDetails);
    const data = await response.data;
    if (data.success) {
      toast.success(data.message);
      navigate('/login');
    } else {
      toast.error(data.message);
    }
  }

  return (
    <section className='h-screen w-full flex justify-center items-center'>
      <div className='h-auto w-1/3 border-2 border-orange-100 rounded-2xl px-10 py-6 text-xl'>
        <h1 className='text-4xl font-bold mb-4'>Sign up Form</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <input
              type="text"
              name="name"
              id="name"
              value={userDetails.name}
              className='border-solid border-2 rounded-lg border-orange-200 p-2 focus:outline-orange-400'
              onChange={handleChange}
              placeholder='Name'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <select
              name="role"
              id="role"
              className='border-solid border-2 rounded-lg border-orange-200 p-2 focus:outline-orange-400'
              onChange={handleChange}
            >
              <option disabled selected value> -- Select one -- </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <input
              type="email"
              name="email"
              id="email"
              value={userDetails.email}
              className='border-solid border-2 rounded-lg border-orange-200 p-2 focus:outline-orange-400'
              onChange={handleChange}
              placeholder='Email'
              required
            />
          </div>
          <div className='flex flex-col gap-2 mb-3'>
            <div className='border-solid border-2 border-orange-200 rounded-lg flex justify-between'>
              <input
                type={viewPassword ? "text" : "password"}
                name="password"
                id="password"
                value={userDetails.password}
                className='border-solid border-orange-200 rounded-l-md w-[90%] p-2 focus:outline-orange-400'
                onChange={handleChange}
                placeholder='Password'
                required
              />
              <button
                onClick={handleViewPassword}
                className='pr-3'>
                {viewPassword ? <BiHide /> : <BiShow />}
              </button>
            </div>
          </div>
          <button type='submit' className='bg-orange-500 p-2 text-white rounded-lg font-bold hover:bg-orange-600'>Sign up</button>
          <p className='text-center text-lg'>Already registered? <Link to="/login" className='text-orange-700 underline'>Click here</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Register