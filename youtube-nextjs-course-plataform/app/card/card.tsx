import Image from "next/image";
import Link from "next/link";

interface CardProps {
    href: string;
    image: string;
    title: string;
    description: string;

}

export const Card = ({title, description, href, image}: CardProps) => {

    return(
        
        <Link href='/cursos' className='hover:no-underline'>
            <article className = 'flex flex-col gap-4 p-2  sm:hover:bg-primary'>
                <Image
                src={image}
                alt={title}
                width={1000}
                height={0}
                className = 'aspect-video object-cover rounded-2xl'
                />
                <h4 className='font-extrabold text-lg'>{title}

                </h4>


                <p className='line-clamp-3'>
                    {description}
                </p>
            </article>
        </Link>
    )
};