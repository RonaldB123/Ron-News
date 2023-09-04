import { ArticleCard } from "./ArticleCard"
import { useEffect } from "react"
import { getArticles } from "./api-functions/getArticles"
import { useState } from "react"

export const ArticleList = () => {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        getArticles().then(({data}) => {
            setArticleData(data.articles);
        })
    }, [])

    return (
    <div className="articleList-container">
        <ArticleCard data={articleData}/>
    </div>
    )
}