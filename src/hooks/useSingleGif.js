import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import useGif from "./useGifs";

export default function useSingleGif ({ id }) {
    const {gif} = useGif()
    const gitFromCache = gif.find(singleGif => singleGif.id === id)

    const [gifs, setGif] = useState(gitFromCache);
    
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if(!gifs) {
            setIsLoading(true)
            getSingleGif({ id })
            .then(gi => {
                setGif(gi)
                setIsLoading(false)
            })
            .catch(err => {
                setIsError(true)
            });
        }
    }, [gifs, id]);

    return {gifs, isError, isLoading}
}