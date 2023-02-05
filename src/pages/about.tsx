import Head from 'next/head'
import Image from 'next/image'
import profileImg from '@/assets/images/profile_pic.png'
import { Container } from '@/components/Container'

export default function About() {
  return (
    <>
        <Head>
            <title>About - Alphonse Pierre</title>
            <meta
            name="description"
            content="I’m Aplhonse Pierre, a music critic from New York City."
            />
        </Head>
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                    src={profileImg}
                    alt="portrait"
                    width={500}
                    height={500}
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
                </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                I'm a music critic born and raised in New York.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                    My work has appeared in Pitchfork, Complex, the Fader, Interview Magazine, Fact Magazine, Passion of the Weiss, Vice, and more.
                    I've been a guest on Podcasts from Pitchfork, the Ringer, NPR, and the New York Times. 
                    Every month I'm the host of a radio show at The Lot in Greenpoint, Brooklyn called The Leaks, which is named after his newsletter. 
                </p>
                </div>
            </div>
            </div>
        </Container>
    </>
  )
}