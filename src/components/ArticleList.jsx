import { ArticleCard } from "./ArticleCard"
import { useEffect } from "react"
import { getArticles } from "../api-functions/getArticles"
import { useState } from "react"

export const ArticleList = () => {
    const [articleData, setArticleData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles().then(({data}) => {
            setArticleData(data.articles);
            setIsLoading(false);
        })
    }, [])

    if(isLoading){
        return (
            <h1 className="loading-header">Loading...</h1>
        )
    }

    return (
    <div className="articleList-container">
        <ArticleCard data={articleData}/>
    </div>
    )
}