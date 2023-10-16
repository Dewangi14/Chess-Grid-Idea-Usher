import React, { useEffect, useState } from "react";

function ChessGrid() {

    // array of arrays for chess grid
    const chessboard = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    const [active, setActive] = useState(null); // state variable for indicating the active block

    //function to color the block according to activity
    function isRed(row,col)
    { return active && active.row === row && active.col === col;}
  
  

  return (
    <div>
      {chessboard.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex"}}>
          {row.map((cell, colIndex) => (
            <div
              id={`${rowIndex},${colIndex}`}
              onClick={() => {
                let copy = {
                  row: rowIndex,
                  col: colIndex
                };
                setActive(copy);
              }}
              key={colIndex}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor:`${isRed(rowIndex,colIndex)?"red":(rowIndex+colIndex)%2===0?"black":"white"}`,
                
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
  }



export default ChessGrid;

// onClick={(e)=>{e.currentTarget.style.backgroundColor="red"}}
