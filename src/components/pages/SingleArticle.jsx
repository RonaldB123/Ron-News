import { useParams } from 'react-router-dom';
import { getArticleById } from '../../api-functions/getArticleById';
import { useEffect, useState } from 'react';
import { ArticleComments } from '../ArticleComments';
import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { patchArticleVotes } from '../../api-functions/patchArticleVotesByArticleId';

export const SingleArticle = () => {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams();
    const [error, setError] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        getArticleById(article_id).then(({ data }) => {
            setArticle(data.article)
            setIsLoading(false);
        }).catch(() => {
            setError(true);
        })
    }, [])

    useEffect(() => {
        const storedLiked = localStorage.getItem(`liked_${article_id}`);
        const storedDisliked = localStorage.getItem(`disliked_${article_id}`);
        const storedLikes = localStorage.getItem(`likes_${article_id}`);
        const storedDislikes = localStorage.getItem(`dislikes_${article_id}`);

        if (storedLiked === 'true') {
            setLiked(true);
        }

        if (storedDisliked === 'true') {
            setDisliked(true);
        }

        if (storedLikes) {
            setLikes(Number(storedLikes));
        }

        if (storedDislikes) {
            setDislikes(Number(storedDislikes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(`liked_${article_id}`, liked);
    }, [liked]);

    useEffect(() => {
        localStorage.setItem(`disliked_${article_id}`, disliked);
    }, [disliked]);

    useEffect(() => {
        localStorage.setItem(`likes_${article_id}`, likes);
    }, [likes]);

    useEffect(() => {
        localStorage.setItem(`dislikes_${article_id}`, dislikes);
    }, [dislikes]);

    const handleLike = () => {
        if (disliked) {
            setDisliked(false);
            setDislikes(dislikes - 1);
        }
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    
        patchArticleVotes(article_id, liked ? -1 : 1)
            .then(response => {
            })
            .catch(error => {
                setError(true);
            });
    };

    const handleDislike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        }
        setDisliked(!disliked);
        setDislikes(disliked ? dislikes - 1 : dislikes + 1);

        patchArticleVotes(article_id, disliked ? 1 : -1)
            .then(response => {
            })
            .catch(error => {
                setError(true);
            });
    };

    if (isLoading) {
        return (
            <h1 className="loading-header">Loading...</h1>
        )
    }

    if (error) {
        return (
            <h1 className="loading-header">An error has occurred...</h1>
        )
    }

    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Typography sx={{ fontSize: { xs: "30px", md: "40px" } }}>{article.title}</Typography>
            <Typography sx={{ fontSize: "15px" }} gutterBottom>By {article.author}</Typography>
            <Divider sx={{ mb: 5 }} />
            <Box
                component="img"
                sx={{
                    height: "auto",
                    width: "100%",
                    mb: 5
                }}
                src={article.article_img_url}
            ></Box>
            <Divider sx={{ mb: 2 }} />
            <Typography variant='subtitle1' sx={{ textAlign: "left", mb: 2, width: "80%", mr: "auto", ml: "auto" }}>{article.body}</Typography>
            <Typography variant='subtitle2' sx={{ textAlign: "left", mb: 2, width: "80%", mr: "auto", ml: "auto" }}>Created {new Date(article.created_at).toDateString()}</Typography>
            <Grid container sx={{ mt: 5, justifyContent: "space-between", alignItems: "center", maxWidth: "80%", mr: "auto", ml: "auto"}}>
                <Grid item>
                    <Stack sx={{flexDirection: "row"}}>
                        <Typography sx={{ fontSize: "30px", mr: 1}}>{disliked ? article.votes - dislikes : article.votes + likes}</Typography>
                        <IconButton color={liked ? 'primary' : 'default'} onClick={handleLike}>
                            {liked ? <ThumbUpIcon sx={{fontSize: "30px"}} /> : <ThumbUpOutlinedIcon sx={{fontSize: "30px"}}/>}
                        </IconButton>
                        <IconButton color={disliked ? 'primary' : 'default'} onClick={handleDislike}>
                            {disliked ? <ThumbDownIcon sx={{fontSize: "30px"}}/> : <ThumbDownOutlinedIcon sx={{fontSize: "30px"}}/>}
                        </IconButton>
                    </Stack>
                </Grid>
                <Grid item sx={{ml: 1}}>
                    <ArticleComments article_id={article.article_id} />
                </Grid>
            </Grid>

            <Divider />
        </Container>
    )
}