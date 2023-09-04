

export const ArticleCard = ({data}) => {
    return (
            <ul className="articleCard-list">
                {data.map(article => {
                    return <li key={article.article_id} className="articleCard-item">
                        <img className="articleCard-img" src={article.article_img_url}></img>
                        <h3 className="articleCard-title" >{article.title}</h3>
                    </li>
                })}
            </ul>
    )

}