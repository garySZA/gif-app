import React from "react";
import { GifGridProps } from "../types/componentTypes";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    !isLoading && images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            image={ image }
                            />
                    ))
                }
            </div>
        </>
    )
}
