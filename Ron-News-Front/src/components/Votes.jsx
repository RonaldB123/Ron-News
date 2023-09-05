import { useEffect, useState } from "react";

export const Votes = ({votesData}) => {
    const [votes, setVotes] = useState(0);
    const [isClickedPlus, setIsClickedPlus] = useState(false);
    const [isClickedMinus, setIsClickedMinus] = useState(false);


    useEffect(() => {
        setVotes(votesData);
    }, [votesData])

    const handleVotePlusClick = () => {
        if(!isClickedPlus && !isClickedMinus){
            setVotes(votes + 1);
            setIsClickedPlus(true);
        }else if(isClickedPlus){
            setIsClickedPlus(false);
            setVotes(votes - 1);
        }else if(isClickedMinus){
            setIsClickedMinus(false)
            setVotes(votes + 2)
            setIsClickedPlus(true)
        }
    }

    const handleVoteMinusClick = () => {
        if(!isClickedMinus && !isClickedPlus){
            setVotes(votes - 1);
            setIsClickedMinus(true)
        }else if(isClickedMinus){
            setIsClickedMinus(false)
            setVotes(votes + 1)
        }else if(isClickedPlus){
            setIsClickedPlus(false)
            setVotes(votes - 2)
            setIsClickedMinus(true)
        }
    }

    return (
        <div className="voting-container">
            <div className="voting-buttons">
                <button onClick={handleVotePlusClick} className={!isClickedPlus ? "voting-plus" : "votingClicked-plus"}>+</button>
                <button onClick={handleVoteMinusClick} className={!isClickedMinus ? "voting-minus" : "votingClicked-minus"}>-</button>
            </div>
            <div className="voting-votes">
                <p className="voting-data">{votes}</p>
            </div>
        </div>
    )
}