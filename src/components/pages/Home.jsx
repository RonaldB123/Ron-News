import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { getArticlesOrderVotes } from '../../api-functions/getArticlesOrderVotes';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticlesOrderVotes()
      .then((response) => {
        setLoading(false);
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const firstArticle = articles[0];
  const otherArticles = articles.slice(1);

  if(loading){
    return (
        <Typography sx={{textAlign: "center"}}>
            Loading...
        </Typography>
    )
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} sx={{justifyContent: "center", mt: 1}}>
        <Grid item xs={12}>
            <Link to={`/articles/${firstArticle.article_id}`} style={{ textDecoration: 'none' }}>
          <Card
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <CardMedia
              component="img"
              alt={firstArticle.title}
              height={300}
              image={firstArticle.article_img_url}
            />
            <CardContent>
              <Typography variant="h4" component="div">
                {firstArticle.title}
              </Typography>
              <Typography variant="subtitle2">
                By {firstArticle.author}
              </Typography>
              <Typography variant="subtitle2">
                Published on {new Date(firstArticle.created_at).toDateString()}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
        {otherArticles.map((article) => (
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
  );
};

