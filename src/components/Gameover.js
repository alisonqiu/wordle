import React, { useContext } from "react"
import { AppContext } from "../App"
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Confetti from "./Confetti";
import pinkBg from "../../src/images/pinkbg.jpg"
import Typography from '@mui/material/Typography';

export default function GameOver() {
    const{gameOver, setGameOver,correctWord,currAttempt} = useContext(AppContext)
    const sectionStyle = {
        backgroundImage:
          `url(${pinkBg})` ,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:'100vh'
      };
      const theme = createTheme({
        components: {
          MuiTypography: {
            defaultProps: {
              fontFamily:[
                'Chilanka',
                'cursive',
              ].join(','),
            },
          },
        },
      });
    return (
      <>
      <Confetti won={gameOver.guessedWord}/>
      <ThemeProvider theme={theme}>
<Grid className="gameOver" >
      <Typography variant="subtitle1">{gameOver.guessedWord? "You Correctly Guessed the Word!": "You Failed to Guess the Word"}</Typography>
      <h1>Correct Word: </h1>
      <Typography variant="h1">{correctWord}</Typography>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.row+1} attempts</h3>
      )}
    </Grid>
    </ThemeProvider>
      </>
    )
}