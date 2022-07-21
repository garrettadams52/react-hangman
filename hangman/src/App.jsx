import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/data.js'
import Display from "./components/display"
import Button from './components/button'
import Letters from './components/letters'
import randomWord from './assets/random'
import { useFetch } from "react-async"

function App() {

  let ind = Math.floor(Math.random() * (25-0+1))
  let blah = data[ind]
  let check = blah.split("")
  
  randomWord().then(rw=>{
     check = rw.split("")
   })
  /////////////////////////////////
  // const [users, setUsers] = useState([])
  // const [user, setUser] = useState("")
  // const [addNewUser, setAddNewUser] = useState("")
  
  // const getSetUsers = async () => {
  //     const users = await getUsers();
  //     console.log('users are', users);
  //     // immutability
  //     // users = users.user.list
  //     setUsers(users.user.list)
  // }
  // useEffect(() => {
  //   console.log('call endpoint')
  //   getSetUsers();
  // }, [addNewUser])
  //////////////
  const [word, setWord] = useState(check)
  const [guesses, setGuesses] = useState([])

  console.log(word)
  
  return (
    <div className="App">
    <Display word = {word} guesses = {guesses}/>
    <Button guesses = {guesses} addGuess = {setGuesses}/>
    <Letters guesses= {guesses} word = {word}/>
    </div>
  )
}

export default App
