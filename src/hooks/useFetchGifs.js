import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";


export const useFetchGifs = (nameCategory) => {
  
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async()=>{
        const images = await getGif(nameCategory);
        setImages(images);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages()
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
