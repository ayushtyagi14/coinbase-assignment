"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function OtpVerification() {
    const router = useRouter()

    const handleNextPage = (e) => {
        e.preventDefault()

        router.push('/upload-photo')
    }

    return (
        <div className="max-w-lg mx-auto p-5 h-[70vh]">
            <img src="/back.png" alt="back" className='cursor-pointer' onClick={() => router.push('/')} />
            <h2 className="text-left text-2xl mb-4 mt-10 font-bold">Enter the 7-digit code we texted to +xx xxxx xx88</h2>
            <p className="text-left mb-4">This extra step shows it&apos;s really you trying to sign in</p>
            <form className="space-y-4 flex flex-col justify-between h-full" onSubmit={handleNextPage}>
                <div>
                    <input type="number" id="number" placeholder='Enter one time password' name="email" className="w-full focus:outline-none focus:border-[#2752E7] focus:border-2 border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className='flex flex-col gap-4'>
                    <button type="submit" className="w-full bg-[#2752E7] text-white py-2 rounded-md hover:bg-[#2751e7c5]">
                        Submit
                    </button>
                    <button type="submit" className="w-full text-black bg-white py-2 rounded-md border border-black">
                        I need help
                    </button>
                </div>
            </form>
        </div>
    );
}
