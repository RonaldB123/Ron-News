import { getCommentsByArticleId } from "../api-functions/getCommentsByArticleId"
import { useEffect, useState } from "react"
import { Votes } from "./Votes"

export const ArticleComments = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(article_id).then(({data}) => {
            setComments(data.comments);
            setIsLoading(false);
        })

    },[])

    if(isLoading){
        return (
            <h1 className="loading-header">Loading...</h1>
        )
    }

    return (
        <div className="comments-container">
            <h1 className="comments-header">Comments</h1>
            <ul className="commentsList-container">
                {comments.map(comment => {
                    return <li className="commentsList-item" key={comment.comment_id}>
                        <hr></hr>
                        <h3 className="commentsList-author">{comment.author}</h3>
                        <p className="commentsList-created">Created {comment.created_at.split("T")[0]}</p>
                        <p className="commentsList-body">{comment.body}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}