import { FeatureArticles } from "../../../backend/tempData"
import Link from "next/link";
import Image from "next/image";

interface Post {
    id: number;
    date: string;
    imageUrl: string;
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

const capitalizeFirstLetter = (word: string): string =>
    word.charAt(0).toUpperCase() + word.slice(1);

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                                        src={require(`/backend/tempData/images/${post.imageUrl}`)}
                                        alt={post.imageAlt}
                                        fill={true}
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <Link
                                            href={`/${post.category}`}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {capitalizeFirstLetter(post.category)}
                                        </Link>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex border-t border-gray-100 pt-8">
                                        <Link href={post.href} className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
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