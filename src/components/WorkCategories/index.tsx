import Link from 'next/link';
import { Reviews, Profiles, Interviews, Reported, ScenePieces, FilmAndTv } from '../../../data';


const WorkCategories = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const tempData = [Reviews, Profiles, Interviews, Reported, ScenePieces, FilmAndTv];
    return (
        <ul role="list" className="grid mx-auto mt-20 max-w-2xl grid-cols-2 gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8 md:grid-cols-3 lg:mx-0 lg:max-w-none ">
            {tempData.map((category, index) => (
                <li key={`category-${index}`} className="group flex justify-center">
                    <Link href={`/${category.href}`} className="flex flex-col justify-center items-center">
                        <img src={`${basePath}/images/${category.image}`} width={300} height={300} alt={category.imageAlt} className="aspect-[5/6] rounded-2xl pointer-events-none object-cover group-hover:opacity-75" />
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-zinc-900 dark:text-zinc-200">{category.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default WorkCategories;