
interface Link {
    id: number;
    date: string;
    title: string;
    description: string;
    href: string;
}

interface Category {
    image: string;
    imageAlt: string;
    name: string;
    href: string;
    articles: Array<Link>;
}


const Reviews: Category = {
    image: "reviews.webp",
    imageAlt: "Reviews",
    name: "Reviews",
    href: "reviews",
    articles: [
        {
            id: 0,
            date: "February 1, 2023",
            title: "Lil Yachty: Let's Start Here",
            description: 'At a surprise listening event last Thursday, Lil Yachty introduced his new album Let’s Start Here., an unexpected pivot, with a few words every rap fan will find familiar: “I really wanted to be taken seriously as an artist, not just some SoundCloud rapper or some mumble rapper."',
            href: "https://pitchfork.com/reviews/albums/lil-yachty-lets-start-here/"
        },
        {
            id: 1,
            date: "October 9, 2022",
            title: "Wu-Tang Clan: Wu-Tang Forever",
            description: "In the summer of 1997, the Wu-Tang Clan were in the midst of their mafia movie montage—you know, when life is sweet and it seems like it’s always going to be that way.",
            href: "https://pitchfork.com/reviews/albums/wu-tang-clan-wu-tang-forever/"
        },
        {
            id: 2,
            date: "November 14, 2022",
            title: "CEO Trayle: HH5",
            description: "On the ninth track of CEO Trayle’s HH5, the rapper is at war with himself. The song, “Alter Ego 2,” pits the sensitive and reasonable Trayle against his twisted counterpart C4, a voice in his head that moves like he has a death wish.",
            href: "https://pitchfork.com/reviews/albums/ceo-trayle-hh5/"
        },
        {
            id: 3,
            date: "	October 19, 2022",
            title: "Lil Baby: It’s Only Me",
            description: "On his 2020 album My Turn, Lil Baby embodied a heavyweight boxer the night before his title shot. But his latest, It’s Only Me, is the championship defense against some dude they pulled off the street to lose.",
            href: "https://pitchfork.com/reviews/albums/lil-baby-its-only-me/"
        },
        {
            id: 4,
            date: "August 9, 2022",
            title: "YoungBoy Never Broke Again: The Last Slime",
            description: "YoungBoy Never Broke Again has long positioned himself as an outsider, but he’s more of the music industry than he likes to believe. The 22-year-old Baton Rouge rapper’s latest project, The Last Slimeto, slots right in with some of this year’s other middling major-label rap releases.",
            href: "https://pitchfork.com/reviews/albums/youngboy-never-broke-again-the-last-slimeto/"
        },
        {
            id: 5,
            date: "March 2, 2022",
            title: "Kanye West: DONDA",
            description: "For all the theatrics, mythmaking, and assholery that come along with a Kanye West album, at the center of it all used to be the music. I challenge anyone to watch the first two episodes of jeen-yuhs, the new three-part documentary about West’s early years, and not come away feeling a little bit nostalgic for a bygone era.",
            href: "https://pitchfork.com/reviews/albums/kanye-west-donda-2-v22222-miami/"
        },
    ]
}

const Profiles: Category = {
    image: "profiles.webp",
    imageAlt: "Profiles",
    name: "Profiles",
    href: "profiles",
    links: [
        "https://pitchfork.com/features/profile/bartees-strange-farm-to-table-interview/",
        "https://pitchfork.com/features/interview/earl-sweatshirt-sick-interview/",
        "https://pitchfork.com/features/rising/mercury-rapper-interview-tabula-rasa/",
        "https://pitchfork.com/features/rising/staysie-atoms-interview/",
        "https://pitchfork.com/features/rising/navy-blue-sage-elsesser-interview/",
        "https://pitchfork.com/features/rising/bizzy-banks-is-at-the-forefront-of-brooklyn-drill-rap-next-wave/"
    ]
}

const Interviews: Category = {
    image: "interviews.webp",
    imageAlt: "Interviews",
    name: "Interviews",
    href: "interviews",
    links: [
        "https://pitchfork.com/features/5-10-15-20/the-music-that-made-the-neptunes-chad-hugo/",
        "https://pitchfork.com/features/cover-story/yaeji-amaarae-bartees-strange-keiyaa-angel-bat-dawid-interview/",
        "https://pitchfork.com/thepitch/what-shannon-thornton-from-p-valley-is-listening-to/"
    ]
}

const Reported: Category = {
    image: "reported.webp",
    imageAlt: "Reported",
    name: "Reported",
    href: "reported",
    links: [
        "https://pitchfork.com/features/article/welcome-to-the-next-generation-of-club-rap/",
        "https://pitchfork.com/thepitch/brooklyn-drill-rap-live-bk-drip-sheff-g-fivio-foreign-pop-smoke/",
        "https://pitchfork.com/thepitch/how-selling-and-leasing-type-beats-is-making-unknown-producers-rich/"
    ]
}

const ScenePieces: Category = {
    image: "scene-piece.webp",
    imageAlt: "Scene Pieces",
    name: "Scene Pieces",
    href: "scene-pieces",
    links: [
        "https://pitchfork.com/thepitch/detroit-is-2019s-most-important-rap-scenehere-are-the-best-songs-from-the-city-this-year/",
        "https://pitchfork.com/features/lists-and-guides/a-guide-to-michigan-rap-2020s-most-exciting-regional-scene/",
        "https://www.vice.com/en/article/zmxb93/youre-not-paying-attention-to-new-yorks-most-exciting-new-rap-scene",
        "https://pitchfork.com/thepitch/milwaukee-rap-biggie-netflix-papoose-cereal/",
        "https://pitchfork.com/features/article/2010s-drill-rap-songs/"
    ]
}

const FilmAndTv: Category = {
    image: "film-tv.webp",
    imageAlt: "Film and TV",
    name: "Film and TV",
    href: "film-and-tv",
    links: [
        "https://pitchfork.com/thepitch/atlanta-season-3-premiere-review/",
        "https://pitchfork.com/thepitch/revisiting-eminems-battle-rap-fairytale-8-mile/",
        "https://pitchfork.com/thepitch/tubi-is-somehow-the-best-video-streaming-service-for-rap-cinephiles/",
        "https://pitchfork.com/thepitch/rap-shit-hbo-max-review/",
        "https://pitchfork.com/thepitch/revisiting-brown-sugar-the-rom-com-that-made-hip-hop-more-than-a-tagline/",
        "https://www.grailed.com/drycleanonly/belly-movie-style"

    ]
}

export {
    Reviews,
    Profiles,
    Interviews,
    Reported,
    ScenePieces,
    FilmAndTv
}









