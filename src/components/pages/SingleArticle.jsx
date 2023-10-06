import { useParams } from 'react-router-dom';
import { getArticleById } from '../../api-functions/getArticleById';
import { useEffect, useState } from 'react';
import { ArticleComments } from '../ArticleComments';
import { Votes } from '../Votes';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export const SingleArticle = () => {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams();
    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);

    useEffect(()=>{
        getArticleById(article_id).then(({data}) =>{
            setArticle(data.article)
            setIsLoading(false);
        })
    },[])

    const handleUpVote = () => {
        if(upVote){
            setUpVote(false);
        }
        setUpVote(true);
    }

    const handleDownVote = () => {
        if(downVote){
            setDownVote(false);
        }
        setDownVote(true);
    }
    

    if(isLoading){
        return (
            <h1 className="loading-header">Loading...</h1>
        )
    }

    return (
        <Container sx={{textAlign: "center", mt: 5}}>
            <Typography sx={{fontSize: {xs:"30px" ,md: "40px"}}}>{article.title}</Typography>
            <Typography sx={{fontSize: "15px"}} gutterBottom>By {article.author}</Typography>
            <Divider sx={{mb: 5}} />
            <Box
            component="img"
            sx={{
              height: "auto",
              width: "100%",
              mb: 5
            }}
            src={article.article_img_url}
            ></Box>
            <Divider/>
            <Typography variant='subtitle1' sx={{textAlign: "left", mb: 2}}>{article.body}</Typography>
            <Typography variant='subtitle2'>Created {article.created_at.split("T")[0]}</Typography>
            <Grid container sx={{mt: 5, justifyContent: "center"}}>
                <Grid item>
                    <Typography sx={{fontSize: "30px", mr: 2}}>{article.votes}</Typography>
                </Grid>
                <Grid item>
                    {upVote ? 
                    <ThumbUpIcon sx={{fontSize: "40px", mr: 2}} onClick={handleUpVote}/> :
                    <ThumbUpOutlinedIcon sx={{fontSize: "40px", mr: 2}} onClick={handleUpVote}/> 
                }
                    
                </Grid>
                <Grid item>
                    {downVote ? <ThumbDownIcon sx={{fontSize: "40px"}} onClick={handleDownVote}/>: 
                    <ThumbDownOutlinedIcon sx={{fontSize: "40px"}} onClick={handleDownVote}/>
                    }
                </Grid>
            </Grid>
        {/* <div className='singleArticle-container'>
            <Votes votesData={article.votes} article_id={article.article_id}/> */}
            <Divider/>
            <ArticleComments article_id={article.article_id}/>
        {/* </div> */}
        </Container>
    )
}