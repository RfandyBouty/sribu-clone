import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function SearchBar() {
    return (
        <div className='flex-row md:flex space-y-4 space-x-0 md:space-y-0 md:space-x-2 items-center'>
            <div className='bg-white flex shadow-xl transition duration-200 hover:shadow-none focus:shadow-none border rounded-full px-4 py-2'>
                <input placeholder='Cari jasa, logo, video, google review' type='text' className='ring-0 outline-none w-full md:w-[340px] pl-2' />
                <div className='bg-[#18254E] w-10 rounded-full p-2'>
                    <MagnifyingGlassIcon className='text-gray-200 w-6' />
                </div>
            </div>
            <span>atau</span>
            <div className='bg-white border rounded-full px-6 py-4 cursor-pointer shadow-xl transition duration-200 hover:shadow-none'>
                <h3>Lihat Paket</h3>
            </div>
        </div>
    )
}
