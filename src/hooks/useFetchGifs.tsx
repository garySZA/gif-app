import { useEffect, useState } from "react";
import { Image } from "../types/image";
import { getGifs } from "../services/gifs";

export const useFetchGifs = ( category:string ) => {
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>( true );

    const getImages = async () => {
        const newImages = await getGifs( category );

        setImages( newImages );
        setIsLoading( false );
    }

    useEffect(() => {
        getImages();
    }, [])
    
    return {
        images,
        isLoading
    }
}
