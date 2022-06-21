import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { AppContext } from "../App";

export default function Letter({ row, col }) {
  const { board, correctWord, currAttempt, guessedLetters, setGuessedLetters } =
    useContext(AppContext);

  const letter = board[row][col];

  //change the color of board based on how correct the letter is
  const green = correctWord.toUpperCase()[col] === letter;
  //not correct and not empty and the current word includes this letter
  const yellow =
    !green && letter !== "" && correctWord.toUpperCase().includes(letter);
  //only check after enter
  //console.log(currAttempt.row +" "+ row)
  const letterState =
    currAttempt.row > row && green
      ? "#528d4e"
      : currAttempt.row > row && yellow
      ? "#b49f39"
      : "3a393c";
  //const letterState = currAttempt.row > row && green? green:currAttempt.row > row && yellow? yellow:grey
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: letterState,
    padding: theme.spacing(1.7),
    margin: theme.spacing(0.5),
    // width: "3vw",
    // height: "3vw",
    width: "30px",
    height: "30px",
    textAlign: "center",
    alignItems: "center",
    border: "1px solid grey",
    fontSize: "30px",
    fontWeight: "bolder",
    fontFamily: "Helvetica Neue",
  }));

  //add the incorrect letters to guessedLetters each time we move to a new row
  useEffect(() => {
    if (letter !== "" && !green && !yellow) {
      setGuessedLetters((prev) => [...prev, letter]);
      console.log("guessedLetters: ", guessedLetters);
    }
  }, [currAttempt.row]);

  return <Item>{letter}</Item>;
}
