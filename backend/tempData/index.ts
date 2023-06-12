
export interface Article {
    id: number;
    date: string;
    title: string;
    description: string;
    href: string;
}

export interface Category {
    image: string;
    imageAlt: string;
    name: string;
    href: string;
    articles: Array<Article>;
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
    articles: [
      {
        id: 0,
        date: "",
        title: "Bartees Strange: Farm-to-Table Interview",
        description: "",
        href: "https://pitchfork.com/features/profile/bartees-strange-farm-to-table-interview/"
      },
      {
        id: 1,
        date: "",
        title: "Earl Sweatshirt: Sick Interview",
        description: "",
        href: "https://pitchfork.com/features/interview/earl-sweatshirt-sick-interview/"
      },
      {
        id: 2,
        date: "",
        title: "Mercury Rapper Interview: Tabula Rasa",
        description: "",
        href: "https://pitchfork.com/features/rising/mercury-rapper-interview-tabula-rasa/"
      },
      {
        id: 3,
        date: "",
        title: "Staysie Atoms Interview",
        description: "",
        href: "https://pitchfork.com/features/rising/staysie-atoms-interview/"
      },
      {
        id: 4,
        date: "",
        title: "Navy Blue & Sage Elsesser Interview",
        description: "",
        href: "https://pitchfork.com/features/rising/navy-blue-sage-elsesser-interview/"
      },
      {
        id: 5,
        date: "",
        title: "Bizzy Banks: At the Forefront of Brooklyn Drill Rap",
        description: "",
        href: "https://pitchfork.com/features/rising/bizzy-banks-is-at-the-forefront-of-brooklyn-drill-rap-next-wave/"
      }
    ]
  };
  

  const Interviews: Category = {
    image: "interviews.webp",
    imageAlt: "Interviews",
    name: "Interviews",
    href: "interviews",
    articles: [
      {
        id: 0,
        date: "",
        title: "The Music That Made The Neptunes' Chad Hugo",
        description: "",
        href: "https://pitchfork.com/features/5-10-15-20/the-music-that-made-the-neptunes-chad-hugo/"
      },
      {
        id: 1,
        date: "",
        title: "Yaeji, Amaarae, Bartees Strange, KeiyaA, Angel Bat Dawid: Building a New Sound",
        description: "",
        href: "https://pitchfork.com/features/cover-story/yaeji-amaarae-bartees-strange-keiyaa-angel-bat-dawid-interview/"
      },
      {
        id: 2,
        date: "",
        title: "What Shannon Thornton from P-Valley Is Listening To",
        description: "",
        href: "https://pitchfork.com/thepitch/what-shannon-thornton-from-p-valley-is-listening-to/"
      }
    ]
  };

  const Reported: Category = {
    image: "reported.webp",
    imageAlt: "Reported",
    name: "Reported",
    href: "reported",
    articles: [
      {
        id: 0,
        date: "",
        title: "Welcome to the Next Generation of Club Rap",
        description: "",
        href: "https://pitchfork.com/features/article/welcome-to-the-next-generation-of-club-rap/"
      },
      {
        id: 1,
        date: "",
        title: "Brooklyn Drill Rap, Live From BK Drip",
        description: "",
        href: "https://pitchfork.com/thepitch/brooklyn-drill-rap-live-bk-drip-sheff-g-fivio-foreign-pop-smoke/"
      },
      {
        id: 2,
        date: "",
        title: "How Selling and Leasing Type Beats Is Making Unknown Producers Rich",
        description: "",
        href: "https://pitchfork.com/thepitch/how-selling-and-leasing-type-beats-is-making-unknown-producers-rich/"
      }
    ]
  };
  

  const ScenePieces: Category = {
    image: "scene-piece.webp",
    imageAlt: "Scene Pieces",
    name: "Scene Pieces",
    href: "scene-pieces",
    articles: [
      {
        id: 0,
        date: "",
        title: "Detroit Is 2019's Most Important Rap Scene—Here Are the Best Songs From the City This Year",
        description: "",
        href: "https://pitchfork.com/thepitch/detroit-is-2019s-most-important-rap-scenehere-are-the-best-songs-from-the-city-this-year/"
      },
      {
        id: 1,
        date: "",
        title: "A Guide to Michigan Rap: 2020's Most Exciting Regional Scene",
        description: "",
        href: "https://pitchfork.com/features/lists-and-guides/a-guide-to-michigan-rap-2020s-most-exciting-regional-scene/"
      },
      {
        id: 2,
        date: "",
        title: "You're Not Paying Attention to New York's Most Exciting New Rap Scene",
        description: "",
        href: "https://www.vice.com/en/article/zmxb93/youre-not-paying-attention-to-new-yorks-most-exciting-new-rap-scene"
      },
      {
        id: 3,
        date: "",
        title: "Milwaukee Rap: Biggie, Netflix, Papoose, Cereal",
        description: "",
        href: "https://pitchfork.com/thepitch/milwaukee-rap-biggie-netflix-papoose-cereal/"
      },
      {
        id: 4,
        date: "",
        title: "2010s Drill Rap Songs",
        description: "",
        href: "https://pitchfork.com/features/article/2010s-drill-rap-songs/"
      }
    ]
  };
  

  const FilmAndTv: Category = {
    image: "film-tv.webp",
    imageAlt: "Film and TV",
    name: "Film and TV",
    href: "film-and-tv",
    articles: [
      {
        id: 0,
        date: "",
        title: "Atlanta Season 3 Premiere Review",
        description: "",
        href: "https://pitchfork.com/thepitch/atlanta-season-3-premiere-review/"
      },
      {
        id: 1,
        date: "",
        title: "Revisiting Eminem's Battle Rap Fairytale: 8 Mile",
        description: "",
        href: "https://pitchfork.com/thepitch/revisiting-eminems-battle-rap-fairytale-8-mile/"
      },
      {
        id: 2,
        date: "",
        title: "Tubi Is Somehow the Best Video Streaming Service for Rap Cinephiles",
        description: "",
        href: "https://pitchfork.com/thepitch/tubi-is-somehow-the-best-video-streaming-service-for-rap-cinephiles/"
      },
      {
        id: 3,
        date: "",
        title: "Rap Shit: HBO Max Review",
        description: "",
        href: "https://pitchfork.com/thepitch/rap-shit-hbo-max-review/"
      },
      {
        id: 4,
        date: "",
        title: "Revisiting Brown Sugar: The Rom-Com That Made Hip-Hop More Than a Tagline",
        description: "",
        href: "https://pitchfork.com/thepitch/revisiting-brown-sugar-the-rom-com-that-made-hip-hop-more-than-a-tagline/"
      },
      {
        id: 5,
        date: "",
        title: "Belly: Movie Style",
        description: "",
        href: "https://www.grailed.com/drycleanonly/belly-movie-style"
      }
    ]
  };
  

export {
    Reviews,
    Profiles,
    Interviews,
    Reported,
    ScenePieces,
    FilmAndTv
}









