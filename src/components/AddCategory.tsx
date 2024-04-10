import React, { useState } from "react";
import { AddCategoryProps } from '../types/componentTypes';

export const AddCategory:React.FC<AddCategoryProps> = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState<string>('');
    
    const onInputChange = (event:any):void => {
        
        setInputValue(event.target.value);
    }

    const onSubmit = (event:any):void => {
        event.preventDefault();

        const value:string = inputValue.trim();

        if( value.length <= 1 ) return;
        onNewCategory( value );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        )

}
