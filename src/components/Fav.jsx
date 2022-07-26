import useUser from "hooks/useUser"
import Modal from "./Modal";
import Login from "./Login";
import { useState } from "react";
import { useLocation } from "wouter"

export default function Fav({id}) {
    const {isLogged, addFav, favs} = useUser()
    const [_, navigate] = useLocation();
    const [modal, setShowmodal] = useState(false);

    const isFaved = favs.some(favId => favId === id)

    const handleClick = () => {
        if(!isLogged) return setShowmodal(true)
        /* isFaved ? deleteFav({id}) : */ addFav({id})
    }

    const handleClose = () => {
      setShowmodal(false)
    }

    const handleLogin = () => {
      setShowmodal(false)
    }

    const [ label, emoji ] = isFaved ? ['Remove GIF from favorites', '❌'] : [ 'Add Gif to favorites', '❤️' ]

  return (
    <>
      <button onClick={handleClick}>
          <span aria-label={label} role='img'>{emoji}</span>
      </button>
      {
        modal && <Modal onClose={handleClose}><Login onLogin={handleLogin}/></Modal>
      }
    </>
  )
}
