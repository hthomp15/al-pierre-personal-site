import Head from 'next/head'
import WorkCategories from '../components/WorkCategories'
import FeatureArticle from '../components/FeatureArticle'

const Home: React.FC = () => {
  

  return (
    <>
      <Head>
        <title>Alphonse Pierre - Writing</title>
        <meta name="description" content="Articles written by Alphonse Pierre. Articles include album reviews, artist interviews, profiles, scene pieces, film & tv and music journalism." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`/favicon.ico`} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <WorkCategories/>
        </div>
        <div className="mx-auto max-w-4xl">
          <FeatureArticle/>
        </div>
      </div>
    </>
  )
}

export default Home
