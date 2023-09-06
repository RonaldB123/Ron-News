import axios from "axios"

export const patchArticleVotes = (article_id, votes) => {
    return axios.patch(`https://ron-news.onrender.com/api/articles/${article_id}`, {inc_votes: votes});
}