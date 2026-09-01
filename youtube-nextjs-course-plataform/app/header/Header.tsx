'use client';

import { usePathname } from "next/navigation";

export const Header = () => {
    const currentPath = usePathname();


    return (
        <nav className="flex items-center justify-center bg-primary text-white py-4">
            <ul className="flex gap-4 items-center">
                <li className="my-2">
                    <a href="/" className="border-2 rounded-md py-2 px-2">
                        CODARSE
                    </a>
                </li>
                <li>
                    <a href="/" data-active={currentPath === '/'} className= 'data-[active=true]:underline'>
                        Página Inicial
                    </a>
                </li>
                
                <li>
                    <a href="/cursos">Cursos</a>
                </li>
                <li>
                    <a href="https://codarse.com/blog" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
            
    );
};