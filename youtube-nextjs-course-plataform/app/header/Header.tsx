'use client';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";

export const Header = () => {
    const [title, setTitle] = useState('CodarSe');
    const currentPath = usePathname();

    useEffect(() =>{

        setTitle(document.title);

    }, [currentPath]);


    return (
        <nav className="flex items-center gap-6 justify-start  md:justify-center bg-primary text-white py-2 sm:py-4 px-6">
            <button className='sm:hidden'>
                <MdMenu size={24}></MdMenu>
            </button>
            <ul className="flex gap-4 items-center">
                <li className="my-2">
                    <a href="/" className="border-2 rounded-md py-2 px-2">
                        CODARSE
                    </a>
                </li>
                <li className='hidden sm:block'>
                    <a href="/" data-active={currentPath === '/'} className= 'data-[active=true]:underline'>
                        Página Inicial
                    </a>
                </li>
                
                <li className='hidden sm:block'>
                    <a href="/cursos">Cursos</a>
                </li>
                <li className='hidden sm:block'>
                    <a href="https://codarse.com/blog" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                </li>
            </ul>

            <h1 className='sm:hidden'>Codarse - Página inicial</h1>
        </nav>
            
    );
};