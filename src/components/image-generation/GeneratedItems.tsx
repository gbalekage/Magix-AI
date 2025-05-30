import React from 'react'
import { Card, CardContent } from '../ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const images = [
    {
        src: "/hero-images/Charismatic Young Man with a Warm Smile and Stylish Tousled Hair.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Confident Businesswoman on Turquoise Backdrop.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Confident Woman in Red Outfit.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Confident Woman in Urban Setting.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Futuristic Helmet Portrait.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Futuristic Woman in Armor.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Man in Brown Suit.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Poised Elegance of a Young Professional.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Professional Business Portrait.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Professional Woman in Navy Blue Suit.jpeg",
        alt: "Charismatic"
    },
    {
        src: "/hero-images/Sophisticated Businessman Portrait.jpeg",
        alt: "Charismatic"
    },
]

const GeneratedItems = () => {
    if (images.length === 0) {
        return (
            <Card className='w-full max-w-2xl bg-muted'>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-2xl'>Aucune image deja Generer</span>
                </CardContent>
            </Card>
        )
    }

    return (
        <Carousel
            className="w-full max-w-2xl"
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="flex items-center justify-center rounded-lg overflow-hidden aspect-square relative">
                            <Image src={image.src} alt={image.alt} fill className='w-full h-full object-cover' />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default GeneratedItems