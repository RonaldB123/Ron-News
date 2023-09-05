import { useParams } from 'react-router-dom';
import { getArticleById } from '../../api-functions/getArticleById';
import { useEffect, useState } from 'react';

export const SingleArticle = () => {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams();

    useEffect(()=>{
        getArticleById(article_id).then(({data}) =>{
            setArticle(data.article)
            setIsLoading(false);
        })
    },[])
    

    if(isLoading){
        return (
            <h1 className="loading-header">Loading...</h1>
        )
    }

    return (
        <div className='singleArticle-container'>
            <img className='singleArticle-img' src={article.article_img_url}></img>
            <h1 className='singleArticle-title'>{article.title}</h1>
            <p className='singleArticle-author'>By {article.author}</p>
            <hr className='singleArticle-line'></hr>
            <p className='singleArticle-body'>{article.body}</p>
        </div>
    )
}