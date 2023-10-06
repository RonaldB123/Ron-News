import { ArticleCard } from "./ArticleCard"
import { useEffect } from "react"
import { getArticles } from "../api-functions/getArticles"
import { useState } from "react"
import { Grid } from "@mui/material"

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
        
    <Grid container spacing={12}>
        <Grid item xs={12} sm container>
            <Grid item container direction="row" spacing={2} xs={12}>
    {articleData.map(article => {
        return (
            <Grid item xs key={article.article_id}>
                <ArticleCard data={article}/>
            </Grid>
            )
        })}
        </Grid>
        </Grid>
    </Grid>
    )
}

