function Letters(props){
    let incorrectGuesses = props.guesses.filter((letter)=>{
        if(!props.word.includes(letter)){
            return letter
        }
    })

    if(incorrectGuesses.length>6){
        alert("Game Over")
    }


    return <h1>{incorrectGuesses}</h1>
}

export default Letters