'use client';
import {UIEvent, useRef, useState} from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';

import { Card } from "../card/card";

interface ISectionProps {
    title: string;
    items: ICardProps[];
    variant: 'grid' | 'h-list';
}
export const Section= ({ title, items, variant= 'grid' }: ISectionProps) => {

const scrollRef = useRef<HTMLUListElement>(null);
const [scrollAt, setScrollAt] = useState<'start'| 'middle' | 'end'> ('start');

const handleScroll = (event: UIEvent<HTMLUListElement,UIEvent> ) =>{
    console.log(event.currentTarget.scrollLeft);
};

const handleSetScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll });
}



    return (
        <section className='flex flex-col gap-4 px-4'>
            <h2 className='font-bold text-xl'>
                {title}
            </h2>
            <ul
            ref = {scrollRef} 
            data-variant={variant}
            onScroll={handleScroll}
            className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col
            data-[variant=h-list]:sm:overflow-x-auto'>


            <button
            disabled={scrollAt === 'start'}
            onClick = {() => handleSetScroll(-350)}
            className= 'h-14 w-14 bg-primary rounded-full flex items-center justify-center sticky my-auto left-0 -ml-14'>
                <MdKeyboardArrowLeft size={32} />
            </button>
               {items.map((item, index) => (
    <li
        key={`${item.href}-${index}`}
        data-variant={variant}
        className="w-full data-[variant=h-list]:sm:w-72"
    >
        <Card
            description={item.description}
            href={item.href}
            image={item.image}
            title={item.title}
        />
    </li>
))}
            <button
            disabled={scrollAt === 'end'}
            onClick = {() => handleSetScroll(350)}
            className= 'h-14 w-14 bg-primary rounded-full flex items-center justify-center sticky my-auto right-0 -ml-14'>
                <MdKeyboardArrowRight size={32} />
            </button>

            </ul>
        </section>
    )
};

