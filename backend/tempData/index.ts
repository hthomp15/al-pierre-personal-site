
interface Link {
    id: number;
    date: string;
    title: string;
    href: string;
}

interface Category {
    image: string;
    imageAlt: string;
    name: string;
    href: string;
    links: Array<Link>;
}


const Reviews: Category = {
    image: "reviews.webp",
    imageAlt: "Reviews",
    name: "Reviews",
    href: "reviews",
    links: [
        {
            id: 1,
            date: "September 3 2021",
            title: "Wu-Tang Clan: Wu-Tang Forever",
            href: "https://pitchfork.com/reviews/albums/wu-tang-clan-wu-tang-forever/"
        },
        {
            id: 2,
            date: "August 27 2021",
            title: "HH5",
            href: "https://pitchfork.com/reviews/albums/ceo-trayle-hh5/"
        },
        
        // "https://pitchfork.com/reviews/albums/wu-tang-clan-wu-tang-forever/",
        // "https://pitchfork.com/reviews/albums/ceo-trayle-hh5/",
        // "https://pitchfork.com/reviews/albums/lil-baby-its-only-me/",
        // "https://pitchfork.com/reviews/albums/youngboy-never-broke-again-the-last-slimeto/",
        // "https://pitchfork.com/reviews/albums/kanye-west-donda-2-v22222-miami/"
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









