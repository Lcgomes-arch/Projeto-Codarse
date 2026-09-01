export const Header = () => {
    return (
        <nav className="flex items-center justify-center bg-primary text-white py-4">
            <ul className="flex gap-2 ">
                <li>
                    <a href="/" className="border-2 rounded-md py-2 px-2">
                        CODARSE
                    </a>
                </li>
                <li>
                    <a href="/">Página Inicial</a>
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