import axios from "axios"

export const getCommentsByArticleId = (article_id) => {
    return axios.get(`https://ron-news.onrender.com/api/articles/${article_id}/comments`)
}