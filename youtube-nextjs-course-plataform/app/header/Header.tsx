'use client';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";

export const Header = () => {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('CodarSe');
    const currentPath = usePathname();

    useEffect(() =>{

        setTitle(document.title);

    }, [currentPath]);


    return (
        <nav className="flex items-center gap-6 justify-start  md:justify-center bg-primary text-white py-2 sm:py-4 px-6">
            <button className='sm:hidden' onClick={() => setDrawer (true)}>
                <MdMenu size={24} />
            </button>
            <ul className="flex gap-4 items-center" tabIndex={drawer ? -1 : undefined }>
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

                <div data-open={drawer}
                tabIndex={drawer ? undefined : -1}
                onClick={() => setDrawer(false)}
                 className= 'bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full' >
                    <ul className="flex gap-4 flex-col p-4 w-60 bg-background onClick={e => e.stopPropagation()}>">
                    
                    <li className=''>
                        <a href="/" data-active={currentPath === '/'} className= 'data-[active=true]:underline'>
                            Página Inicial
                        </a>
                    </li>
                    
                    <li className=''>
                        <a href="/cursos">Cursos</a>
                    </li>
                    <li className=''>
                        <a href="https://codarse.com/blog" target="_blank" rel="noopener noreferrer">
                            Blog
                        </a>
                    </li>
                                </ul>
                </div>

            <h1 className='sm:hidden'>{title}</h1>
        </nav>
            
    );
};