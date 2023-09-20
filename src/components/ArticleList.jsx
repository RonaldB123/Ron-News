import { ArticleCard } from "./ArticleCard"
import { useEffect } from "react"
import { getArticles } from "../api-functions/getArticles"
import { useState } from "react"
import { Container, Grid } from "@mui/material"

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
    <>
    {articleData.map(article => {
        return (
            <ArticleCard data={article}/>
            )
        })}
    </>
    )
}