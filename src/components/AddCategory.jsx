import { useState } from "react"


export const AddCategory = ({changeCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        changeCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={ (event)=>{onSubmit(event)}}>
        <input
        type="text"
        placeholder="Bucar Gifs"
        value={inputValue}
        onChange = { (event)=>{onInputChange(event)}}
        ></input>

    </form>
    
  )
}
