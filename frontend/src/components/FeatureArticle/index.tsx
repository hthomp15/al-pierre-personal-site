import { FeatureArticles } from "../../../data"
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Post {
    id: number;
    date: string;
    imageUrl: StaticImageData;
    imageAlt: string;
    category: string;
    title: string;
    description: string;
    href: string;
}

const posts: Post[] = FeatureArticles.map((article) => ({
    id: article.id,
    date: article.date,
    imageUrl: article.image,
    imageAlt: article.imageAlt,
    category: article.category,
    title: article.title,
    description: article.description,
    href: article.href,
}));

const cleanString = (str: string): string => {
    const stringWithSpaces: string = str.replace(/-/g, ' ');

    const stringWithAmpersand: string = stringWithSpaces.replace(/\band\b/g, '&');

    const words: string[] = stringWithAmpersand.split(' ');

    const capitalizedWords: string[] = words.map((word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const capitalizedString: string = capitalizedWords.join(' ');

    return capitalizedString;
};


const FeatureArticle = () => {
    return (
        <div className="bg-white py-24 sm:py-32 dark:bg-zinc-900 dark:ring-zinc-300/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                        Featured Articles
                    </h2>

                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="relative isolate flex flex-col gap-8 lg:flex-row"
                            >
                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.imageAlt}
                                        sizes="(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw"
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-zinc-600 dark:text-zinc-400">
                                            {post.date}
                                        </time>
                                        <Link
                                            href={`/articles/${post.category}`}
                                            className="relative z-10 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200"
                                        >
                                            {cleanString(post.category)}
                                        </Link>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-800 dark:text-zinc-100 ">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex border-t border-zinc-100 dark:border-zinc-800 pt-8">
                                        <Link href={post.href} className="text-sm font-semibold leading-6 text-teal-500 dark:text-teal-600 hover:text-teal-400 dark:hover:text-teal-700">
                                            Continue Reading <span aria-hidden="true">&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureArticle;