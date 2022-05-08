import React from "react"

export default function Key({keyVal}) {
    return (
        <Key
        sx={{
            width: '50px',
            height: '70px',
            margin: '5px',
            borderRadius: '4px',
            display: 'grid',
            placeItems: 'center',
            fontSize: '20px',
            backgroundColor: 'grey',
            color: 'white',
            fontFamily: 'Arial',
            cursor: 'pointer',
          }}
        >
            {keyVal}
        </Key>
    )
}