import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState("")
    
    const onInputChange = (event) => {
    setInputValue(event.target.value);
    //console.log(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setCategories(cat=> [...cat,inputValue])
        onNewCategory(inputValue.trim())
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit} action="">
            <input 
            type="text" 
            placeholder="Buscar Gifts"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
  )
}
