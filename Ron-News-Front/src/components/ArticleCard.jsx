import { Link } from 'react-router-dom'

export const ArticleCard = ({data}) => {
    return (
            <ul className="articleCard-list">
                {data.map(article => {
                    return <Link key={article.article_id} to={`${article.article_id}`}>
                    <li className="articleCard-item">
                        <img className="articleCard-img" src={article.article_img_url}></img>
                        <h3 className="articleCard-title" >{article.title}</h3>
                    </li>
                    </Link>
                })}
            </ul>
    )

}