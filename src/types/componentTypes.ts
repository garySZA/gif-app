import { Dispatch, SetStateAction } from "react";
import { Image } from "./image";

export interface AddCategoryProps {
    setCategories?: Dispatch<SetStateAction<string[]>>;
    onNewCategory: ( newCategory:string ) => void;
}

export interface GifGridProps {
    category: string;
}

export interface GifItemProps {
    image: Image
}