import { usePathname } from 'next/navigation';
import { Reviews, Profiles, FilmAndTv, Reported, ScenePieces } from 'backend/tempData';
import { Card } from '@/components/Card';


export default function ArticleContent() {
    const currentPath = usePathname();
    let category: any;

    switch (currentPath) {
        case '/reviews':
            return category = Reviews.articles
        case '/profiles':
            return category = Profiles.articles
        case '/film-and-tv':
            return category = FilmAndTv.articles
        case '/reported':
            return category = Reported.articles
        case '/scene-pieces':
            return category = ScenePieces.articles
        default:
            null
    }

    return (
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
                <Card as="article">
                    <Card.Title href={`/articles`}>
                    </Card.Title>
                    <Card.Eyebrow as="time" dateTime={ } decorate>

                    </Card.Eyebrow>
                    <Card.Description></Card.Description>
                    <Card.Cta>Read article</Card.Cta>
                </Card>
            </div>
        </div>
    )
}