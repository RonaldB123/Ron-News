import { useEffect, useState } from "react";
import { patchArticleVotes } from "../api-functions/patchArticleVotesByArticleId";

export const Votes = ({votesData, article_id}) => {
    const [votes, setVotes] = useState(votesData);
    const [isClickedPlus, setIsClickedPlus] = useState(false);
    const [isClickedMinus, setIsClickedMinus] = useState(false);
    const [error, setError] = useState(false);
    
    const handleVotePlusClick = () => {
            if(!isClickedPlus && !isClickedMinus){
                setIsClickedPlus(true);
                setVotes((current) => current + 1)
                patchArticleVotes(article_id, 1).catch((err) =>{
                    setError(true);
                })
            }else if(isClickedPlus){
                setIsClickedPlus(false);
                setVotes((current) => current - 1);
                patchArticleVotes(article_id, -1).catch((err) =>{
                    setError(true);
                })
            }else if(isClickedMinus){
                setIsClickedMinus(false)
                setVotes((current) => current + 2);
                setIsClickedPlus(true)
                patchArticleVotes(article_id, 2).catch((err) =>{
                    setError(true);
                })
            }        
        
    }

    const handleVoteMinusClick = () => {
            if(!isClickedMinus && !isClickedPlus){
                setIsClickedMinus(true)
                setVotes((current) => current - 1);
                patchArticleVotes(article_id, -1).catch((err) =>{
                    setError(true);
                })
            }else if(isClickedMinus){
                setIsClickedMinus(false)
                setVotes((current) => current + 1);
                patchArticleVotes(article_id, 1).catch((err) =>{
                    setError(true);
                })
            }else if(isClickedPlus){
                setIsClickedPlus(false)
                setVotes((current) => current - 2);
                setIsClickedMinus(true)
                patchArticleVotes(article_id, -2).catch((err) =>{
                    setError(true);
                })
            }
        }

        if(error){
            return <h3>An has occurred...</h3>
        }

    return (
        <div className="voting-container">
            <div className="voting-votes">
                <p className="voting-data">{votes}</p>
            </div>
            <div className="voting-buttons">
                <button onClick={handleVotePlusClick} className={!isClickedPlus ? "voting-plus" : "votingClicked-plus"}><span>+</span></button>
                <button onClick={handleVoteMinusClick} className={!isClickedMinus ? "voting-minus" : "votingClicked-minus"}><span>-</span></button>
            </div>
        </div>
    )
}