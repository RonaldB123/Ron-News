import axios from "axios"

export const getArticlesOrderVotes = () => {
    return axios.get('https://ron-news.onrender.com/api/articles?sort_by=votes')
}