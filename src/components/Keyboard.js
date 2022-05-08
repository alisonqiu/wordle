import React from "react"
import Button, { ButtonProps } from '@mui/material/Button';
import Key from "./Key";

const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

export default function Keyboard() {
    return (
        <div className="key-container">
            <div className="line1">
                {line1.map((key) => {
                    return <Key keyVal={key} />;
                })}
            </div>
            <div className="line2">
                {line2.map((key) => {
                    return <Key keyVal={key} />;
                })}
            </div>
      
            <div className="line3">
                <Key keyVal={"ENTER"} />
                {line3.map((key) => {
                return <Key keyVal={key} />;
                })}
                <Key keyVal={"DELETE"} />
            </div>

        </div>
    )
}