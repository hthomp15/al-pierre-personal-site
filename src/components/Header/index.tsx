import Link from 'next/link';

export default function Header() {
    return (
        <nav className="mt-10 flex justify-evenly items-baseline">
            <div className="flex-col items-baseline">
                <Link href="/">
                    <h1 className="text-5xl">Alphonse Pierre</h1>
                </Link>
                <div className='ml-6'>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">Writer | Pitchfork</p>
                </div>
            </div>
            <ul className="inline-flex list-none">
                <Link href="/">
                    <li className="pr-10">Writing</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}