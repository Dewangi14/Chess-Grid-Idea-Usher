import React, { useEffect, useState } from "react";

function ChessGrid() {
  const chessboard = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));

  const [active, setActive] = useState(null);

  console.log("activee: ", active);

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

                
                //   if(e.currentTarget.style.backgroundColor!=="red")
                //  { e.currentTarget.style.backgroundColor="red"}
                // else {
                //   if(rowIndex+colIndex % 2 === 0){
                //     e.currentTarget.style.backgroundColor="black"
                //     }
                //   else{
                //     e.currentTarget.style.backgroundColor="white"
                //   }
                // }
             
              }}
              key={colIndex}
              style={{
                width: "100px",
                height: "100px",
                // backgroundColor: `${
                //   (rowIndex + colIndex) % 2 === 0 ? "black" : "white"
                // }`,

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
