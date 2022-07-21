import axios from 'axios'

async function randomWord(){

    let wordData = await axios.get("https://random-word-api.herokuapp.com/word")
    let word = wordData.data[0]

    return word
    
}

export default randomWord