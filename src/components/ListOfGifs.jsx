import { useEffect, useRef, useCallback } from "react";
import useGif from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import Gif from "./Gif";
import "./styles.css";
import { Helmet } from "react-helmet";

export default function ListOfGifs({ params }) {
  const { keyword, rating } = params
  const {loading, gif, setPage} = useGif({keyword, rating});
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gif ? `${gif.length} resultados de ${keyword}` : '';

  // const handleNextPage = () => {
  //   setPage(prevPage => prevPage += 1)
  // }


  const debouceHandleNextPage = useCallback(debounce(() => setPage(prevPage => prevPage += 1), 1000), [])

  useEffect(() => {
    if(isNearScreen) debouceHandleNextPage()
  }, [isNearScreen, debouceHandleNextPage])

  return(
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>{decodeURIComponent(keyword)}</h1>
      <div className="gifGrid">
          {
            loading 
              ? <p>⌛</p>
              : gif.map(gif => (
                <Gif key={gif.id} {...gif}/>
              ))
            }
      </div>
      <div ref={externalRef} id='visor' />
      {/* <button onClick={handleNextPage}>Get next page</button> */}
    </>
  )
}