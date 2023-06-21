import reviews from '../public/images/reviews.webp';
import profiles from '../public/images/profiles.webp';
import interviews from '../public/images/interviews.webp';
import reported from '../public/images/reported.webp';
import scenePieces from '../public/images/scene-piece.webp';
import filmAndTv from '../public/images/film-tv.webp';
import lilYachty from '../public/images/Lil-Yachty-Lets-Start-Here.webp';
import clubRap from '../public/images/Screenshot-2023-06-14-at-9.28.59.png';
import { StaticImageData } from 'next/image';


export interface Article {
    id: number;
    date: string;
    title: string;
    description: string;
    href: string;
}

export interface Category {
    image: StaticImageData;
    imageAlt: string;
    name: string;
    href: string;
    articles: Array<Article>;
}

export interface FeatureArticle {
    id: number;
    date: string;
    title: string;
    description: string;
    href: string;
    image: StaticImageData;
    imageAlt: string;
    category: string;
}

export interface CategoryNames {
    id: number;
    name: string;
}

const CategoryNames: Array<CategoryNames> = [
    {
        id: 0,
        name: "Reviews"
    },
    {
        id: 1,
        name: "Profiles"
    },
    {
        id: 2,
        name: "Interviews"
    },
    {
        id: 3,
        name: "Reported"
    },
    {
        id: 4,
        name: "Scene Pieces"
    },
    {
        id: 5,
        name: "Film & TV"
    }
]


const FeatureArticles: Array<FeatureArticle> = [ 
    {
        id: 0,
        date: "February 1, 2023",
        title: "Lil Yachty: Let's Start Here",
        description: 'At a surprise listening event last Thursday, Lil Yachty introduced his new album Let’s Start Here., an unexpected pivot, with a few words every rap fan will find familiar: “I really wanted to be taken seriously as an artist, not just some SoundCloud rapper or some mumble rapper.” This is the speech rappers are obligated to give when it comes time for the drum loop to take a backseat to guitars...',
        href: "https://pitchfork.com/reviews/albums/lil-yachty-lets-start-here/",
        image: lilYachty,
        imageAlt: "Lil Yachty",
        // This should be lowercase for routing to the correct category
        category: "reviews"
    },
    {
        id: 1,
        date: "September 1, 2022",
        title: "Welcome to the Next Generation of Club Rap",
        description: "One night in August, a nondescript metal venue in suburban New Jersey, just north of Newark, is the epicenter of one of the most exciting trends in rap right now. At first, the teens who fill the intimate space are bored, standing with their hands at their sides like Sims characters, as a series of local rappers mimic out-of-state styles. Then a DJ screams into the mic “RIP DJ Tim Dolla,” shouting out the Jersey Club pioneer who died weeks earlier...",
        href: "https://pitchfork.com/features/article/welcome-to-the-next-generation-of-club-rap/",
        image: clubRap,
        imageAlt: "Club Rap",
        category: "scene-pieces"
    },
]







const Reviews: Category = {
    image: reviews,
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
    image: profiles,
    imageAlt: "Profiles",
    name: "Profiles",
    href: "profiles",
    articles: [
      {
        id: 0,
        date: "April 4, 2023",
        title: "There Are Unbothered Rappers, and Then There’s Veeze",
        description: "On the way to a studio in Midtown Manhattan, a hungry Veeze scrolls through his food delivery app and sees nothing worth eating. So, midstride, he spontaneously slips into an upscale Chinese restaurant that’s lit only by a few dim chandeliers. The 29-year-old takes a booth in the far back, slouching over like a kid who has fallen asleep in the car.",
        href: "https://pitchfork.com/thepitch/there-are-unbothered-rappers-and-then-theres-deadpan-detroit-enigma-veeze/"
      },
      {
        id: 1,
        date: "April 3, 2023",
        title: "Don’t Even Try to Put TiaCorine Into a Box",
        description: "TiaCorine can see the end of a near two-week grind that had her ricocheting from her spot in Winston-Salem, North Carolina to New York City to schmoozing in L.A. during Grammys week, and now here in Manhattan again for live performances, meetings, and appointments with popular designers amid the February edition of Fashion Week.",
        href: "https://pitchfork.com/features/rising/tiacorine-i-cant-wait-interview/"
      },
      {
        id: 2,
        date: "May 2, 2022",
        title: "Bartees Strange: Farm-to-Table Interview",
        description: "Right off the Hudson River on Manhattan’s west side, Bartees Strange steps onto a driving range in his New Balance dad shoes and admits that his relationship with golf begins and ends with The Legend of Bagger Vance. You know, the 2000 “magical negro” flick where Will Smith plays a mysterious traveler who appears out of the darkness and helps a down-on-his-luck white war veteran...",
        href: "https://pitchfork.com/features/profile/bartees-strange-farm-to-table-interview/"
      },
      {
        id: 3,
        date: "January 20, 2022",
        title: "Earl Sweatshirt: Sick Interview",
        description: "At heart, Earl Sweatshirt is a rap nerd. Throughout our conversation about his new album Sick!, he can’t help but veer off into tangents about the wide-ranging mix of artists, albums, and songs that slip in and out of his personal rotation. Right before he hopped on Zoom from his Los Angeles home, for instance, he was transfixed by a YouTube video from the wildly prolific underground phenomenon Rxk Nephew.",
        href: "https://pitchfork.com/features/interview/earl-sweatshirt-sick-interview/"
      },
      {
        id: 4,
        date: "August 10, 2022",
        title: "Mercury Rapper Interview: Tabula Rasa",
        description: "On a recent afternoon at Coleman Skatepark in Manhattan’s Lower East Side, the graffiti-covered bowls and ramps are crowded enough that you can hear the crashes from a block away. Every couple of minutes the noise of decks and wheels hitting pavement is overpowered by the sound of trains crossing the Manhattan Bridge, which makes the park tremble like an earthquake.",
        href: "https://pitchfork.com/features/rising/mercury-rapper-interview-tabula-rasa/"
      },
      {
        id: 5,
        date: "January 28, 2022",
        title: "Staysie Atoms Interview",
        description: "Staysie Atoms sinks into her bed, which also happens to be her personal studio. It’s there, slouched against the naked walls, where she records her bright, sometimes pitched-up, sometimes chopped-and-screwed, sometimes bitcrushed reimaginings of underground Memphis rap directly into her iPhone.",
        href: "https://pitchfork.com/features/rising/staysie-atoms-interview/"
      },
      {
        id: 6,
        date: "March 31, 2021",
        title: "Navy Blue & Sage Elsesser Interview",
        description: "Sage Elsesser has an enlightening anecdote to go along with seemingly any topic. Many of them involve run-ins with bold names he’s encountered throughout the world. Some are about his love of soccer. Sitting in his cozy garden apartment in Bed-Stuy, Brooklyn, he pulls up his Arsenal squad on FIFA as he recalls the time he met the club’s longtime manager Arsène Wenger in Paris.",
        href: "https://pitchfork.com/features/rising/navy-blue-sage-elsesser-interview/"
      },
      {
        id: 7,
        date: "May 17, 2021",
        title: "Bizzy Banks: At the Forefront of Brooklyn Drill Rap",
        description: "In the heart of East New York, Brooklyn, Bizzy Banks is carefully probing through a corner store fridge with the meticulousness of a kid in an arcade trying to pick their prize in the claw machine. “When I was really trappin’, every morning I would be in this deli early for some pancakes,” says Bizzy as he selects a small carton of Tropicana orange juice.",
        href: "https://pitchfork.com/features/rising/bizzy-banks-is-at-the-forefront-of-brooklyn-drill-rap-next-wave/"
      },

    ]
  };
  

  const Interviews: Category = {
    image: interviews,
    imageAlt: "Interviews",
    name: "Interviews",
    href: "interviews",
    articles: [
      {
        id: 0,
        date: "June 14, 2022",
        title: "The Music That Made The Neptunes' Chad Hugo",
        description: "Beaming in from his cozy home studio in Virginia Beach, Chad Hugo is surrounded by enough instruments to supply a music school. There’s a full drum set in the back corner, synthesizers along the wall, and so many running wires that they would probably take an eternity to untangle. An expensive-looking microphone hovers in front of his face, making his murmurs clearer over Zoom. ",
        href: "https://pitchfork.com/features/5-10-15-20/the-music-that-made-the-neptunes-chad-hugo/"
      },
      {
        id: 1,
        date: "October 12, 2021",
        title: "Yaeji, Amaarae, Bartees Strange, KeiyaA, Angel Bat Dawid: Building a New Sound",
        description: "On a Saturday evening in early September, Bartees Strange launches into a story about the Korean-American electronic producer Yaeji, who is seated just to his left on an oversized couch, her too-long sleeves shielding her blushing face like an invisibility cloak. “Four or five years ago, I was sending Yaeji beats like crazy,”...",
        href: "https://pitchfork.com/features/cover-story/yaeji-amaarae-bartees-strange-keiyaa-angel-bat-dawid-interview/"
      },
      {
        id: 2,
        date: "August 1, 2022",
        title: "What Shannon Thornton from P-Valley Is Listening To",
        description: "Shannon Thornton prepared for her role in P-Valley, the Starz dramedy about the lives of dancers at a Mississippi strip club called the Pynk, by getting really into Southern rap—specifically, rap from New Orleans. “I was doing a lot of research, but it was Juvenile and the Hot Boys that made me go crazy,” she says over Zoom. “Now, whenever we want to have a good time in my trailer I put on Juvenile.”",
        href: "https://pitchfork.com/thepitch/what-shannon-thornton-from-p-valley-is-listening-to/"
      }
    ]
  };

  const Reported: Category = {
    image: reported,
    imageAlt: "Reported",
    name: "Reported",
    href: "reported",
    articles: [
      {
        id: 0,
        date: "September 1, 2022",
        title: "Welcome to the Next Generation of Club Rap",
        description: "One night in August, a nondescript metal venue in suburban New Jersey, just north of Newark, is the epicenter of one of the most exciting trends in rap right now. At first, the teens who fill the intimate space are bored, standing with their hands at their sides like Sims characters, as a series of local rappers mimic out-of-state styles.",
        href: "https://pitchfork.com/features/article/welcome-to-the-next-generation-of-club-rap/"
      },
      {
        id: 1,
        date: "February 18, 2020",
        title: "Brooklyn Drill Rap, Live From BK Drip",
        description: "On Sunday night, veteran radio DJ Funkmaster Flex delivered a speech to a crowd of 3,000 excited New Yorkers, like a principal holding an assembly. “I haven’t seen music like this Brooklyn scene in a long time. We can’t fuck it up,” he pleaded, talking about the local drill rappers everyone had come to witness.",
        href: "https://pitchfork.com/thepitch/brooklyn-drill-rap-live-bk-drip-sheff-g-fivio-foreign-pop-smoke/"
      },
      {
        id: 2,
        date: "September 4, 2018",
        title: "How Selling and Leasing Type Beats Is Making Unknown Producers Rich",
        description: "“That’s what I thought you said. Now let me offer this as a rebuttal...” Those words, spoken by SpongeBob Squarepants, are Swedish producer Izak’s producer tag and the first thing the listener hears when YBN Nahmir’s breakthrough “Rubbin’ Off the Paint” plays. Izak’s instrumental, categorized as a “type beat,” imitates the airy sound producer Pi’erre Bourne made his calling card on songs like Playboi Carti’s “Magnolia.”",
        href: "https://pitchfork.com/thepitch/how-selling-and-leasing-type-beats-is-making-unknown-producers-rich/"
      }
    ]
  };
  

  const ScenePieces: Category = {
    image: scenePieces,
    imageAlt: "Scene Pieces",
    name: "Scene Pieces",
    href: "scene-pieces",
    articles: [
      {
        id: 0,
        date: "August 22, 2019",
        title: "Detroit Is 2019's Most Important Rap Scene—Here Are the Best Songs From the City This Year",
        description: "Detroit is having a hip-hop renaissance. Every week I stumble across a new rapper with that signature Midwest slur and slightly behind-the-beat delivery, telling tales of their latest credit card scam-funded shopping spree and delivering a downpour of punchlines over funky instrumentals. On the rapping end, the bar is high: lyrical, boundary-pushing, and funny. ",
        href: "https://pitchfork.com/thepitch/detroit-is-2019s-most-important-rap-scenehere-are-the-best-songs-from-the-city-this-year/"
      },
      {
        id: 1,
        date: "December 11, 2020",
        title: "A Guide to Michigan Rap: 2020's Most Exciting Regional Scene",
        description: "In familial terms, when it comes to Michigan’s rap scene, Detroit is the older sibling with trophies on the shelf, and Flint is the step-sibling who rips the heads off Barbie dolls, feeds junk food to the pets, and skips school to have cyphers in the park. Together, these two cities, and their surrounding areas, have made Michigan hip-hop flourish this year, forcing the traditional rap hubs to pay attention or be left behind.",
        href: "https://pitchfork.com/features/lists-and-guides/a-guide-to-michigan-rap-2020s-most-exciting-regional-scene/"
      },
      {
        id: 2,
        date: "August 3, 2017",
        title: "You're Not Paying Attention to New York's Most Exciting New Rap Scene",
        description: "New York has been clamoring for a new rap scene. Three years ago, Bobby Shmurda and his GS9 crew lit up the city's streets with a rare kind of buzz, representing a rarely seen side of Brooklyn. It was a scene where Haitians, Jamaicans and West Indians as a whole were embraced...",
        href: "https://www.vice.com/en/article/zmxb93/youre-not-paying-attention-to-new-yorks-most-exciting-new-rap-scene"
      },
      {
        id: 3,
        date: "March 5, 2021",
        title: "Milwaukee Rap: Biggie, Netflix, Papoose, Cereal",
        description: "There are similarities between Detroit and Milwaukee’s respective street rap scenes, but that doesn’t mean they are the same. Yes, both rely on animated personalities, absurdly funny punchlines, and beats with lots of cheap-sounding pianos and steel drums, and neither scene could care any less about recording quality or video budgets.",
        href: "https://pitchfork.com/thepitch/milwaukee-rap-biggie-netflix-papoose-cereal/"
      },
      {
        id: 4,
        date: "October 15, 2019",
        title: "2010s Drill Rap Songs",
        description: "In the summer of 2012, as Chief Keef’s momentum was picking up steam, a Chicago teenager tearfully and angrily addressed the critiques of his favorite rapper in a viral video filmed from the passenger seat of a parked car. “Fuckers in school always telling me, always in the barbershop, ‘Chief Keef ain’t ’bout this, Chief Keef ain’t ’bout that,’” he screamed. “Shut the fuck up!”...",
        href: "https://pitchfork.com/features/article/2010s-drill-rap-songs/"
      }
    ]
  };
  

  const FilmAndTv: Category = {
    image: filmAndTv,
    imageAlt: "Film and TV",
    name: "Film and TV",
    href: "film-and-tv",
    articles: [
      {
        id: 0,
        date: "March 25, 2022",
        title: "Atlanta Season 3 Premiere Review",
        description: "The long-awaited, two-part return of Atlanta kicks off with a Milly Rock gone wrong. In a characteristically bold troll, the first episode barely features any of the show’s principal characters—only Donald Glover’s hapless rap manager Earn gets a brief “it was all a dream” shot at the very end—but it still maintains the striking mix of dark humor, hip-hop, and harrowing racial politics that the series has made its name on.",
        href: "https://pitchfork.com/thepitch/atlanta-season-3-premiere-review/"
      },
      {
        id: 1,
        date: "November 4, 2022",
        title: "Revisiting Eminem's Battle Rap Fairytale: 8 Mile",
        description: "About halfway through 8 Mile, Eminem’s character, B-Rabbit, interrupts a casual rap battle happening between his car factory co-workers on their lunch break. Xzibit, playing a guy named Mike, starts to throw jokes ripping on the weight and sexuality of innocent bystanders who are just trying to chill for their 30 minutes, and B-Rabbit steps in to save the day, or at least that’s what he believes.",
        href: "https://pitchfork.com/thepitch/revisiting-eminems-battle-rap-fairytale-8-mile/"
      },
      {
        id: 2,
        date: "January 27, 2023",
        title: "Tubi Is Somehow the Best Video Streaming Service for Rap Cinephiles",
        description: "Tubi is a free, third-tier streaming service that just magically showed up on my TV one day, and I’ve probably clicked on it more than any other channel ever since for one reason: Their catalog is stacked with just about every overlooked, forgotten, or possibly imaginary movie to ever feature a rapper. ",
        href: "https://pitchfork.com/thepitch/tubi-is-somehow-the-best-video-streaming-service-for-rap-cinephiles/"
      },
      {
        id: 3,
        date: "July 22, 2022",
        title: "Rap Shit: HBO Max Review",
        description: "At first glance, scripted television shows about rappers are everywhere. Lil Dicky’s Dave is ostensibly the story of a rising emcee, but the genre is used more as a springboard for the comedian’s true ambitions to pen a Curb Your Enthusiasm and Louie hybrid. Also, it stinks. Donald Glover’s Atlanta was originally billed as “Twin Peaks with rappers,”...",
        href: "https://pitchfork.com/thepitch/rap-shit-hbo-max-review/"
      },
      {
        id: 4,
        date: "April 23, 2020",
        title: "Revisiting Brown Sugar: The Rom-Com That Made Hip-Hop More Than a Tagline",
        description: "On Mary J. Blige’s “Seven Days,” the singer is having a conversation that takes every ounce of her energy to finish. All at once, she is drenched in pain, indecision, love, and affection. It’s a classic Mary J. record—smoky vocals over warm neo-soul production that could just as easily be rapped over—but what sticks in the listener’s mind is the story: a platonic friendship that becomes something more. ",
        href: "https://pitchfork.com/thepitch/revisiting-brown-sugar-the-rom-com-that-made-hip-hop-more-than-a-tagline/"
      },
      {
        id: 5,
        date: "August 1, 2017",
        title: "Belly: Movie Style",
        description: "Nas struts into the Harlem corner fried chicken spot. Paolo Gucci sunglasses sit perfectly on his face, his fade is sculpted, a leather trench coat sways behind him while a knit turtleneck and Timberland boots round out the look. If Instagram had existed in 1998, Belly would have ensured that Nas would be properly recognized as a fashion icon. ",
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
    FilmAndTv,
    FeatureArticles,
    CategoryNames
}









