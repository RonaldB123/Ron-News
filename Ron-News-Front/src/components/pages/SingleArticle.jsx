import { useParams } from 'react-router-dom';

export const SingleArticle = () => {

    const {article_id} = useParams();
    console.log(article_id)
    return (
        <p>You clicked on article {article_id}</p>
    )
}