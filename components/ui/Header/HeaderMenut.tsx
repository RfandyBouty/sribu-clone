import React from 'react'

export default function HeaderMenut() {
    return (
        <div className='hidden md:flex items-center space-x-6 divide-x text-sm font-bold'>
            <div className='flex items-center space-x-4'>
                <h3 className='cursor-pointer hover:text-blue-600'>Eksplor Jasa</h3>
                <h3 className='cursor-pointer hover:text-blue-600'>Cari Freelancer</h3>
                <h3 className='cursor-pointer hover:text-blue-600'>Lihat Kontes</h3>
            </div>
            <div className='flex items-center space-x-4 pl-0 md:pl-4 cursor-pointer hover:'>
                <h3 className='cursor-pointer hover:text-blue-600'>Daftar Sebagai Freelancer</h3>
                <h3 className='cursor-pointer hover:text-blue-600'>Masuk</h3>
                <div className='bg-[#18254E] cursor-pointer hover:bg-[#18254ea2] duration-200 transition text-white px-6 py-2 rounded-2xl font-normal'>Lihat Paket</div>
            </div>
        </div>
    )
}
