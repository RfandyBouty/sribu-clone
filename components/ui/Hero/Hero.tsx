import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import HeroIcon from '@/assets/image/hero.webp'
import SearchBar from './SearchBar'
import Suggestions from './Suggestions'

export default function Hero() {
    return (
        <div className='relative grid grid-cols-2 place-items-center justify-between items-center max-w-7xl mx-auto px-6 py-20 h-[560px] overflow-hidden'>
            <div className='space-y-4 text-sm'>
                <h3 className='text-2xl font-bold'>Temukan Jasa Digital Sribu dari Freelancer Indonesia Berkualitas dengan Cepat
                </h3>
                <div className='flex items-center space-x-2'>
                    <span className='flex space-x-2 items-center'>
                        <StarIcon className='w-6 text-yellow-500' />
                        <span className='font-bold'>4.9</span> / <span className='text-gray-500'>5.0</span>
                    </span>
                    <h5>98% klien puas. 100,000+ jasa terjual. Garansi uang kembali.</h5>
                </div>
                <SearchBar />
                <Suggestions />
            </div>
            <div className='hidden md:block md:absolute -top-40 -right-64'>
                <Image src={HeroIcon} alt='hero' width={960} height={400} objectFit='contain' />
            </div>
        </div>
    )
}
