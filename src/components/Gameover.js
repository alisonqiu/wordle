import React, { useContext } from "react"
import { AppContext } from "../App"
import Grid from '@mui/material/Grid';
import Confetti from "./Confetti";
import pinkBg from "../../src/images/pinkbg.jpg"
import { Typography } from "@material-ui/core";

export default function GameOver() {
    const{gameOver, setGameOver,correctWord,currAttempt} = useContext(AppContext)
    const sectionStyle = {
        backgroundImage:
          `url(${pinkBg})` ,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:'100vh'
      };

    return (
<Grid className="gameOver" >
      <h3>{gameOver.guessedWord? "You Correctly Guessed the Wordle": "You Failed to Guess the Word"}</h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.row+1} attempts</h3>
      )}
    <Confetti won={gameOver.guessedWord}/>
    </Grid>
    )
}