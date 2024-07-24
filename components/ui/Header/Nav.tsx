import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Nav() {
    return (
        <div className='border'>
            <ul className='flex space-x-6 items-center max-w-7xl mx-auto px-6 py-4 text-xs'>
                <li className='cursor-pointer flex space-x-2 items-center font-bold'><h3>Semua Kategori</h3>  <ChevronDownIcon className='w-4' /></li>
                <li className='cursor-pointer'>Desain Logo</li>
                <li className='cursor-pointer'>Desain UI/UX</li>
                <li className='cursor-pointer'>Pembuatan Website</li>
                <li className='cursor-pointer'>Penulisan Artikel</li>
                <li className='cursor-pointer'>Foto Produk</li>
            </ul>
        </div>
    )
}
