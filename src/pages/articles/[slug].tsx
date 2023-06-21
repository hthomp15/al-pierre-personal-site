import { useRouter } from 'next/router';
import Head from 'next/head';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import ArticleContent from '@/components/ArticleContent';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  const categoryNames: Array<string> = [
    "reviews",
    "profiles",
    "interviews",
    "reported",
    "scene-pieces",
    "film-and-tv"
  ];

  const categoryName: string | undefined = getCategoryNameBySlug(slug as string, categoryNames);

  const goBack = () => {
    router.back();
  };

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

  return (
    <>
      <Head>
        <title>Alphonse Pierre - {categoryName ? cleanString(categoryName) : null}</title>
        <meta name="description" content={`Articles written by Alphonse Pierre. Articles include album reviews, artist interviews, profiles, scene pieces, film & tv and music journalism.`} />
        <link rel="icon" href={`/favicon.ico`} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
          {categoryName ? cleanString(categoryName) : null}
        </h2>
        <div className="mx-auto max-w-4xl mt-10">
          <div className="flex flex-col gap-16">
            <ArticleContent />
          </div>
        </div>
      </div>
    </>
  );
}

function getCategoryNameBySlug(slug: string, categoryNames: Array<string>): string | undefined {
  const sanitizedSlug = slug?.endsWith('/') ? slug.slice(0, -1) : slug;
  const foundCategory = categoryNames.find(categoryName => `/${sanitizeCategoryName(categoryName)}/` === `/${sanitizeCategoryName(sanitizedSlug)}/`);
  return foundCategory ?? undefined;
}

function sanitizeCategoryName(categoryName: string): string {

  return categoryName?.toLowerCase().replace(/ /g, "-");
}
