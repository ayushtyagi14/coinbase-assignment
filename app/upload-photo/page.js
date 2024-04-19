"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPhoto() {
    const router = useRouter()

    return (
        <div className="max-w-lg mx-auto p-5 h-[70vh]">
            <img src="/back.png" alt="back" className='cursor-pointer' onClick={() => router.push('/otp-verification')} />
            <div className="space-y-4 flex flex-col justify-between h-full">
                <div>
                    <img src="/upload-photo.png" alt="Upload Photo" className='cursor-pointer mb-4 mt-10' />
                    <h2 className="text-center text-2xl mb-4 font-bold">Upload your photo to earn rewards</h2>
                    <p className="text-center mb-4">
                        To earn rewards from Coinbase, you need to upload your photo. This is different from account verification which you might have completed
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <button
                        type="submit"
                        className="w-full bg-[#2752E7] text-white py-2 rounded-md hover:bg-[#2751e7c5]"
                        onClick={() => router.push('/assets-to-buy')}
                    >
                        Submit
                    </button>
                    <button type="submit" className="w-full text-black bg-white py-2 rounded-md border border-black">
                        I need help
                    </button>
                </div>
            </div>
        </div>
    );
}
