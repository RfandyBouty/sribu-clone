import React from 'react'

export default function Suggestions() {
    return (
        <div className='flex items-center text-xs space-x-4 pt-2'>
            <h5>Sering dicari:</h5>
            <span className='py-1 px-2 bg-gray-200 rounded-full cursor-pointer'>desain logo</span>
            <span className='py-1 px-2 bg-gray-200 rounded-full cursor-pointer'>desain ui/ux</span>
        </div>
    )
}
