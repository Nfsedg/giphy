import { useEffect, useState, useContext } from 'react'
import getGif from 'services/getGifs';
import GifsContext from 'context/GifsContext';

const INITIAL_PAGE = 0;

function useGif({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {gif, setGifs} = useContext(GifsContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)

    getGif({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, rating, setGifs])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGif({ keyword: keywordToUse, page, rating })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, rating, setGifs])

  return {loading, loadingNextPage, gif, setPage}
}


export default useGif;