import "./App.css"
import React, { useState,useEffect } from "react"
import { nanoid } from "nanoid"
import Die from "./components/Body"
import Confetti from "react-confetti"



export default function App() {
     const [dice, setDice] = useState(allNewDice())
     const[tenzies,setTenzies]=useState(false)

     useEffect(()=>{
     const allHeld=dice.every(die=>die.isHeld) 
     const firstValue=dice[0].value
     const allSameValue=dice.every(die=>die.value===firstValue)
     if(allHeld && allSameValue){
          setTenzies(true)
          console.log("won")
     }

     /*
   the die is checked between the first and the last clicked die
   if all die is held it wil be compared to the index of the first die
     */

     
     }
          ,[dice])

     function generateNewDie(){
          return{
               value: Math.ceil(Math.random() * 6),
               isHeld: false,
               id: nanoid()}
          }
          //it generates a new die

     function allNewDice() {
          const newDice = []  //it create  an array of new elements
          for (let i = 0; i < 10; i++) {
               newDice.push(generateNewDie()) //it iterates it ten times and  pushes already created die  to the new array
          }
          return newDice
     }


     


     const diceElement = dice.map(die => <Die
          value={die.value}
          isHeld={die.isHeld}
          key={die.id}
     
          holdDice={()=>holdDice(die.id)} 
          />)

     function rollDice() {
          if(!tenzies){

               setDice(oldDice=>oldDice.map(die=>{
                    return die.isHeld?
                    die :
                    generateNewDie()
          
         
          }))}
          else{
               setTenzies(false)
               setDice(allNewDice())
          }

     }

     function holdDice(id) {
          setDice(oldDice=>oldDice.map(die=>{
               return die.id===id?
               {...die,isHeld:!die.isHeld}:die
          }))

     }
     /*the hold dice function holds the current value clicked and check the next value */

     


     return (
          <main>
               {tenzies&&<Confetti/>}
               <h1 className="title">Tenzies</h1>
               <p className="instruct">Roll until all dice are the same.click each die to freeze it at its current value between rolls.</p>
               <div className="die-container">
                    {diceElement}
               </div>
               <button onClick={rollDice} className="roll-dice ">{tenzies?"New Game":"Roll"}</button>


          </main>


     )

}