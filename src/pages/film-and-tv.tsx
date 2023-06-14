import Head from "next/head";
import ArticleContent from "@/components/ArticleContent";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function FilmAndTv() {
    return (
        <>
            <Head>
                <title>Alphonse Pierre - Film & TV</title>
                <meta name="description" content="Film and TV pieces by Alphonse Pierre" />
            </Head>
            <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8">
                <button
                    type="button"
                    className="float-left rounded-full hidden sm:inline-flex p-2 text-zinc-800 shadow-md hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <h2 className=" flex text-3xl justify-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100  m-5">
                    Film & TV
                </h2>
                <div className="mx-auto max-w-4xl mt-10">
                    <ArticleContent />
                </div>
            </div>
        </>
    )
}
