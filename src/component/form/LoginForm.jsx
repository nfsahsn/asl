'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData]= useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const {name, value}= e.target
        setFormData((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        try {
            
        } catch (error) {
            console.log(error)
            
        }
    }

  return (
   <form onSubmit={handleSubmit} className='w-full flex flex-col gap-3'>
    <div>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' required onChange={handleChange} value={formData.email}  className='w-full px-3 p-1 border outline-none '/>
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' required  onChange={handleChange} value={formData.password} className='w-full px-3 p-1 border outline-none '/>
    </div>
    <Link href={'/recover-id'} className='text-right'>Forget password?</Link>
    <button className='w-full bg-white text-emerald-600 hover:bg-white/80 cursor-pointer' type='submit'>Login</button>
   </form>
  )
}

export default LoginForm
