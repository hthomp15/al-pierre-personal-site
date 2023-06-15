import Head from "next/head";
import ArticleContent from "@/components/ArticleContent";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";


export default function ScenePieces() {
    const goBack = () => {
        window.history.back();
    };

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <>
            <Head>
                <title>Alphonse Pierre - Scene Pieces</title>
                <meta name="description" content="Alphonse Pierre - Scene Pieces" />
                <link rel="icon" href={`${basePath}/favicon.ico`} />
            </Head>
            <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8">
                <button
                    type="button"
                    className="float-left rounded-full hidden sm:inline-flex p-2 text-zinc-800 shadow-md dark:shadow-zinc-800 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:focus-visible:outline-zinc-400"
                    onClick={goBack}
                >
                    <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <h2 className="flex text-3xl justify-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100 m-5">
                    Scene Pieces
                </h2>
                <div className="mx-auto max-w-4xl mt-10">
                    <ArticleContent/>
                </div>
            </div>
        </>
    );
};

