import Link from 'next/link';

export default function Header() {
    return (
        <nav className="flex justify-evenly items-center">
            <div className="flex-col items-baseline">
                <Link href="/">
                    <h1 className="text-5xl">Alphonse Pierre</h1>
                </Link>
                <p>Writer | Pitchfork</p>
            </div>
            <ul className="inline-flex list-none"> 
                <Link href="/about">
                    <li className="px-2">About</li>
                </Link>
                <li>Writing</li>
            </ul>
        </nav>
    );
}