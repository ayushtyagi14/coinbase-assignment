"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const AssetsToBuy = () => {
    const router = useRouter()

    const data = [
        {
            imgUrl: '/bitcoin.png',
            name: 'Bitcoin',
            shortName: 'BTC',
            price: '$36,701.78',
            percentage: '-6.28%'
        },
        {
            imgUrl: '/bitcoin-cash.png',
            name: 'Bitcoin Cash',
            shortName: 'BCH',
            price: '$665.25',
            percentage: '-9.2%'
        },
        {
            imgUrl: '/ethereum.png',
            name: 'Ethereum',
            shortName: 'ETH',
            price: '$2,629.70',
            percentage: '-8.12%'
        },
        {
            imgUrl: '/ethereum-cash.png',
            name: 'Ethereum Classic',
            shortName: 'ETC',
            price: '$63.94',
            percentage: '-9.56%'
        },
        {
            imgUrl: '/litecoin.png',
            name: 'Lite coin',
            shortName: 'LTC',
            price: '$175.76',
            percentage: '-10.75%'
        },
        {
            imgUrl: '/0x.png',
            name: '0x',
            shortName: 'ZRX',
            price: '$1.07',
            percentage: '-10.75%'
        },
        {
            imgUrl: '/bat.png',
            name: 'Basic Attention Token',
            shortName: 'BAT',
            price: '$0.75',
            percentage: '-10.35%'
        },
        {
            imgUrl: '/mana.png',
            name: 'Decentraland',
            shortName: 'MANA',
            price: '$0.81',
            percentage: '-11.48%'
        },
        {
            imgUrl: '/kyber.png',
            name: 'Kyber Network',
            shortName: 'KNC',
            price: '$2.18',
            percentage: '-13.81%'
        },
    ]

    return (
        <div className="max-w-lg mx-auto p-5 h-[70vh]">
            <div className='flex flex-row items-center w-[70%] justify-between'>
                <img src="/back.png" alt="back" className='cursor-pointer' onClick={() => router.push('/upload-photo')} />
                <p className='text-center justify-center'>Select asset to buy</p>
            </div>
            <ul className='my-4 space-y-6'>
                {data.map((item, index) => (
                    <li className='flex flex-row items-center w-full gap-3' key={index}>
                        <img src={item.imgUrl} alt={item.name} />
                        <div className='flex flex-row w-full justify-between items-stretch'>
                            <div>
                                <h1 className='font-bold'>{item.name}</h1>
                                <p className='text-[15px]'>{item.shortName}</p>
                            </div>
                            <div>
                                <h1>{item.price}</h1>
                                <p className='text-red-400 text-right'>{item.percentage}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AssetsToBuy
