

export default function Header() {
    return (
        <nav className="flex justify-evenly items-center">
            <div className="flex-col items-baseline">
                <h1 className="text-5xl">Alphonse Pierre</h1>
                <p>Writer | Pitchfork</p>
            </div>
            <ul className="inline-flex list-none"> 
                <li className="px-2">About</li>
                <li>Writing</li>
            </ul>
        </nav>
    );
}