import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import ArticleContent from "@/components/ArticleContent";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

interface ArticlePageProps {
    slug: string;
}

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

const ArticlePage: NextPage<ArticlePageProps> = ({ slug }) => {

    return (
        <>
            <Head>
                <title>Alphonse Pierre - {cleanString(slug)}</title>
                <meta name="description" content={`Alphonse Pierre - ${cleanString(slug)}`} />
            </Head>
            <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8">
                <button
                    type="button"
                    className="float-left rounded-full hidden sm:inline-flex p-2 text-zinc-800 shadow-md dark:shadow-zinc-800 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:focus-visible:outline-zinc-400"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <h2 className="flex text-3xl justify-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100 m-5">
                    {cleanString(slug)}
                </h2>
                <div className="mx-auto max-w-4xl mt-10">
                    <ArticleContent slug={slug} />
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (
    context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
    const { slug } = context.query;

    if (typeof slug === "string") {
        return {
            props: {
                slug,
            },
        };
    }

    return {
        notFound: true,
    };
};

export default ArticlePage;
