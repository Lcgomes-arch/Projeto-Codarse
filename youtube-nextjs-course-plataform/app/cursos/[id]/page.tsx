import { CourseHeader } from "@/app/header/course-header/CourseHeader";
import { Metadata } from "next";

interface Props {
    params: { id: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  
return {
    title: "CodarSe - Curso de API Rest, Node e  Typescript",
};

};

export default function PageCoursesDetail({params}: Props) {



    return(
        <main className='mt-8 flex justify-center'>
            <div className= ' w-full min-[880px]:max-w-[880px]'>
               <CourseHeader 
               
               />
            </div>
        </main>
    )
}