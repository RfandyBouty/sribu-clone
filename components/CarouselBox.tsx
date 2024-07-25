import Image from 'next/image'
import React from 'react'
import containerImg from '@/assets/image/container.webp'
import containerImg2 from '@/assets/image/container2.webp'
import containerImg3 from '@/assets/image/container3.webp'
import containerImg4 from '@/assets/image/container4.webp'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export default function CarouselBox() {
    return (
        <div className='py-8'>
            <h3 className='text-lg text-center font-medium'>Yang Populer Di Sribu</h3>
            <Carousel plugins={[Autoplay({ delay: 2000 })]} opts={{ loop: true, align: "center" }} className='py-8'>
                <CarouselContent className="-ml-4">
                    <CarouselItem className="pl-4 basis-2/2">
                        <Image src={containerImg} alt="hero" className='w-[580px] h-56' objectFit='contain' />
                    </CarouselItem>
                    <CarouselItem className="pl-2 basis-2/2">
                        <Image src={containerImg2} alt="hero" className='w-[580px] h-56' objectFit='contain' />
                    </CarouselItem>
                    <CarouselItem className="pl-2 basis-2/2 ">
                        <Image src={containerImg3} alt="hero" className='w-[580px] h-56' objectFit='contain' />
                    </CarouselItem>
                    <CarouselItem className="pl-2 basis-2/2 ">
                        <Image src={containerImg4} alt="hero" className='w-[580px] h-56 rounded-lg' objectFit='contain' />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

        </div>
    )
}
