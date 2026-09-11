'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';
import { MdCheck, MdContentCopy } from 'react-icons/md';



interface IContentCopyProps {
    title: string;
    content: string;
    children: React.ReactNode;
}


export const ContentCopy = ({children, content, title}: IContentCopyProps) => {

    const [copied, setCopied] = useState(false);

    useEffect(() =>{
        if(copied){
            setTimeout(() => setCopied(false), 2000)
        }
    }, [copied]);

    const handleCopy = () => {
        setCopied(true);
        window.navigator.clipboard.writeText(content);
    };

    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                {children}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className= 'p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2'>
                    <span>{title}</span>

                    <div className= 'flex items-center gsp-1 min-w-60 max-w-sm'>
                    <input 
                        value={content}
                        readOnly
                        autoFocus
                        onFocus={e => e.target.select()}
                        className= 'bg-background p-1 px-2 rounded w-full'
                    />

                    <button className='p-3 'onClick={handleCopy}>
                       {copied? <MdCheck className='text-primary'/>:<MdContentCopy />}
                    </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>


        </DropdownMenu.Root>
    );
};