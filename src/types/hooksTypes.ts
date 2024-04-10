import { Image } from "./image";

export interface FetchGifsResult {
    images: Image[],
    isLoading: boolean,
    mockReturnValue?: any;
}