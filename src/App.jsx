import React, { useState, createContext, useEffect } from "react";
import Header from "./components/Header"
import Message from "./components/Message"
import Keyboard from "./components/Keyboard"
import Board from "./components/Board"
import { defaultBoard } from "./Words"

{/*export const AppContext = createContext();*/}

function App() {
  //set initial value of board to empty strings 
  //const [board, setBoard] = useState(defaultBoard)

  return (
    <>
    {/*everything inside <AppContext.Provider> have access to states we pass in 
    <AppContext.Provider value={{
          board,
    setBoard}}>
      <Header/>
      <Board/>
      <Keyboard/>
      <Message/>
</AppContext.Provider>*/}
    </>
  );
}

export default App;
