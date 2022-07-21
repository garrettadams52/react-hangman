import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/data.js'
import Display from "./components/display"
import Button from './components/button'
import Letters from './components/letters'
import {randomWord} from './assets/random'
import { useFetch } from "react-async"
import axios from 'axios'

function App() {

  let ind = Math.floor(Math.random() * (25-0+1))
  let blah = data[ind]
  let check = blah.split("")
  const [word, setWord] = useState([])
  const [guesses, setGuesses] = useState([])
  
  

  useEffect(
    () => {
      const getRandomWord = async() => {
        try{
          const wordData = await axios.get("https://random-word-api.herokuapp.com/word")
          let word = wordData.data[0]
          setWord(word.split(""))
        }catch(e){
          throw e;
        }
      }
      getRandomWord()
    }, 
    [],
  )
  
  return (
    <div className="App">
    <Display word = {word} guesses = {guesses}/>
    <Button guesses = {guesses} addGuess = {setGuesses}/>
    <Letters guesses= {guesses} word = {word}/>
    </div>
  )
}

export default App
