import LoginForm from '@/component/form/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4'>
      <div className='border p-2 bg-emerald-600 text-white rounded-xl flex flex-col md:flex-row items-center justify-center gap-1'>
        <div className='w-full flex flex-col items-center justify-center'>
            <p>Welcome to</p>
            <h1 className='text-2xl font-semibold'>Alpha Science Lab</h1>
            <p>Access your account</p>

        </div>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
