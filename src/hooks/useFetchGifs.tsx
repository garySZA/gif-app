import { useEffect, useState } from "react";
import { Image } from "../types/image";
import { getGifs } from "../services/gifs";
import { FetchGifsResult } from "../types/hooksTypes";

export const useFetchGifs = ( category:string ):FetchGifsResult => {
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>( true );

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
