import Image from 'next/image'
import React from 'react'

type Props = {
    Icon: any
}
export default function IconClient({ Icon }: any) {
    return (
        <Image src={Icon} alt="logo" className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' objectFit='contain' />
    )
}
