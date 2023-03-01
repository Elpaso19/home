import React, { useState} from "react";
import "./App.css";
import Item from "./components/item"
import box from "./components/box"


export default function App() {

     const [squares, setSquares] = useState(box);


     function toggle(id) {


          setSquares(prevState => {
               return prevState.map((square) => {
                    return square.id === id ? { ...square, on: !square.on } : square
               })
          })
     
     }
     
     const squareElement = squares.map((item) => (
          <Item key={item.id}
               handleClick={() => toggle(item.id)}
     
               on={item.on}
          />
     ));
     
     return (
          <div>


               <h1>{squareElement}</h1>

          </div>

     )
}