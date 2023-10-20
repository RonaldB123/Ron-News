import { useEffect } from "react"
import { getArticles } from "../api-functions/getArticles"
import { useState } from "react"
import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const ArticleList = (topic) => {
    const [articleData, setArticleData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles(topic).then(({data}) => {
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
        <Container maxWidth="lg">
      <Grid container spacing={3} sx={{justifyContent: "center", mt: 1}}>
      {articleData.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.article_id}>
            <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '5px',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                alt={article.title}
                height={140}
                image={article.article_img_url}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="subtitle2">
                  By {article.author}
                </Typography>
                <Typography variant="subtitle2">
                  Published on {new Date(article.created_at).toDateString()}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}

      </Grid>
      </Container>
    )
}
