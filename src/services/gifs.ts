import { Gif } from "../types/gif";
import { Image } from "../types/image";

import config from '../config/variables';

export const getGifs = async ( category:string ): Promise<Image[]> => {
    const apikey = config.api__key;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apikey }&q=${ category }&limit=10`;

    const response = await fetch(url);
    const { data=[] } = await response.json();

    const gifs = data.map( (img:Gif) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}