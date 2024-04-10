import React from "react"
import { GifItemProps } from "../types/componentTypes"

export const GifItem: React.FC<GifItemProps> = ({ image: { title, url } }) => {
    
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
