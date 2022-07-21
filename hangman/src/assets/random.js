import axios from 'axios'

export const randomWord = async () =>{
    try{
    let wordData = await axios.get("https://random-word-api.herokuapp.com/word")
    let word = wordData.data[0]
    return word
    }catch(e){
        throw e;
    }

    
    
};

