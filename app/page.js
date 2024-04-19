"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  const handleNextPage = (e) => {
    e.preventDefault()

    router.push('/otp-verification')
  }

  return (
    <div className="max-w-lg mx-auto p-5">
      <h2 className="text-left text-2xl mb-4 mt-10">Sign in to Coinbase</h2>
      <form className="space-y-4" onSubmit={handleNextPage}>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" placeholder='Enter your email' name="email" className="w-full focus:outline-none focus:border-[#2752E7] focus:border-2 border border-gray-300 rounded-md px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" placeholder='Enter your password' name="password" className="w-full focus:outline-none focus:border-[#2752E7] focus:border-2 border border-gray-300 rounded-md px-3 py-2" required />
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm text-[#2752E7] hover:underline">Forgot password?</a>
          <a href="#" className="text-sm text-[#2752E7] hover:underline">Privacy Policy</a>
        </div>
        <button type="submit" className="w-full bg-[#2752E7] text-white py-2 rounded-md hover:bg-[#2751e7c5]">
          Sign In
        </button>
      </form>
    </div>
  );
}
