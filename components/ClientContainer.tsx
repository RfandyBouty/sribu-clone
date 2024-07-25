import React from 'react'
import IconClient from './IconClient'
import { aproIcon, dentalIcon, gojekIcon, indoIcon, jobIcon, kebabIcon, legalIcon, mapIcon, umkmIcon } from '@/constants/image'

export default function ClientContainer() {
    return (
        <div className='max-w-7xl justify-center mx-auto grid grid-cols-1 place-items-center py-20 space-x-24 space-y-4'>
            <h3 className='text-xl font-medium text-center'>Telah Dipercaya 40,000+ Klien (Pribadi, UKM, Hingga Korporasi) Sejak 2012
            </h3>
            <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-9'>
                <IconClient Icon={gojekIcon} />
                <IconClient Icon={mapIcon} />
                <IconClient Icon={indoIcon} />
                <IconClient Icon={umkmIcon} />
                <IconClient Icon={kebabIcon} />
                <IconClient Icon={jobIcon} />
                <IconClient Icon={aproIcon} />
                <IconClient Icon={legalIcon} />
                <IconClient Icon={dentalIcon} />
            </div>
        </div>
    )
}
