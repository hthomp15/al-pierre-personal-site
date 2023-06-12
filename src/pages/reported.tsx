import Head from "next/head";
import ArticleContent from "@/components/ArticleContent";

export default function Reported() {
    return (
        <>
            <Head>
                <title>Alphonse Pierre - Reported</title>
                <meta name="description" content="Reporting artists by Alphonse Pierre" />
            </Head>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className=" flex text-4xl justify-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl m-5">
                    Reported
                </h1>
                <div className="mx-auto max-w-4xl mt-10">
                    <ArticleContent />
                </div>
            </div>
        </>
    )
}
