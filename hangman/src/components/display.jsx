import data from "../assets/data.js"


function Display(props){
    let show = props.word.map((elem)=>{

        if(props.guesses.includes(elem)){
            return elem
        }
        else{
            return "_"
        }
    })
  
  return(
    <h1>{show.join(" ")}</h1>
  )
}

export default Display