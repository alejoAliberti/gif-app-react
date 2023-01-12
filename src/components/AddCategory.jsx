import { useState } from 'react';
import  PropTypes  from "prop-types";

export const AddCategory = ({ onNewValue}) => {  //invocamos la funcion con el desestructuramiento

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {   //tomamos el valor del input y lo enviamos con un submit
        
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {

        event.preventDefault() //evitamos el refresh del navegador 
        if (inputValue.trim().length <= 1) return; 
        
        // onNewValue( categories =>  [...categories, inputValue ]) //enviamos un callback a la funcion e insertamos el nuevo valor seguido de las categorias anteriores 
       
        setInputValue('') //al enviarse el evento se vacia el input
        onNewValue( inputValue.trim() );
    }
    return (
    

    <form onSubmit={ onSubmit } aria-label="form">

    <input 
        type='text'
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
    />

    </form>
    
    
    
  )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired,
}
