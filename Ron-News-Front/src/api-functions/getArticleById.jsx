import axios from "axios"

export const getArticleById = (articleId) => {
    return axios.get(`https://ron-news.onrender.com/api/articles/${articleId}`);
}