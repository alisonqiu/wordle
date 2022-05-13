import React, { useContext } from "react"
import { AppContext } from "../App";
import DeleteAlert from "./alerts/DeleteAlert"
import InvalidAlert from "./alerts/invalidAlert"
import EnterFive from "./alerts/enterFiveAlert"

export default function CustomAlert() {
const{invalid,deleteLetter,enterFive} = useContext(AppContext)

  return (
    <>
      {deleteLetter && <DeleteAlert/>}
      {invalid &&<InvalidAlert/>}
      {enterFive && <EnterFive/>}
    </>
  );
}
