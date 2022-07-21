function Button(props){

    const handleSubmit = event => {
        event.preventDefault();
        let newInput = document.getElementById('word').value;
        let temp = [...props.guesses]

        if(newInput.length>1){
            alert("Enter One Letter")
        }
        else{
            
            if (temp.includes(newInput)){
                alert("Already Guessed")
            }
            else{
                temp.push(newInput)
                props.addGuess(temp)
            }

        }

 

    }

    return(
        <>
            <input type="text" id="word" placeholder="Enter Word"></input>
            <button type='button' onClick={handleSubmit} >Submit</button>
        </>
    )
}

export default Button