import Head from "next/head";
import ArticleContent from "@/components/ArticleContent";

export default function Interviews() {
    return (
        <>
            <Head>
                <title>Alphonse Pierre - Interviews</title>
                <meta name="description" content="Interviews by Alphonse Pierre" />
            </Head>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className=" flex text-3xl justify-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100  m-5">
                    Interviews
                </h2>
                <div className="mx-auto max-w-4xl mt-10">
                    <ArticleContent />
                </div>
            </div>
        </>
    )
}
