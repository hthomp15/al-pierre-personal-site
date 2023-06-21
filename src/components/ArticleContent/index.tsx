import { usePathname } from 'next/navigation';
import { Reviews, Profiles, FilmAndTv, Reported, Interviews, ScenePieces, Article, Category } from 'data';
import { Card } from '@/components/Card';




export default function ArticleContent() {

    const currentPath = usePathname();
    let category: Category | undefined;

    switch (currentPath) {
        case '/articles/reviews/':
            category = Reviews
            break;
        case '/articles/profiles/':
            category = Profiles
            break;
        case '/articles/film-and-tv/':
            category = FilmAndTv
            break;
        case '/articles/reported/':
            category = Reported
            break;
        case '/articles/scene-pieces/':
            category = ScenePieces
            break;
        case '/articles/interviews/':
            category = Interviews
            break;
        default:
            null
    }

    return (
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-xl">
            <div className="flex flex-col gap-16">
                {category !== undefined ? category.articles.map((article: Article) => (
                    <Card key={article.id}>
                        <Card.Title as="h3" href={article.href}>
                            {article.title}
                        </Card.Title>
                        <Card.Eyebrow as="time" dateTime={article.date} decorate>
                            {article.date}
                        </Card.Eyebrow>
                        <Card.Description>{article.description}</Card.Description>
                        <Card.Cta>Read more</Card.Cta>
                    </Card>
                )) : null}
            </div>
        </div>
    )
}