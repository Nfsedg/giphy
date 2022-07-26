import React, { useEffect, useState } from "react";
import getFavs from "services/getFavs";

const Context = React.createContext({});

export default function UserContext ({children}) {
    const [favs, setFavs] = useState([])
    const [jwt, setJWT] = useState(() =>  window.localStorage.getItem('jwt'));

    useEffect(() => {
        if(!jwt) return setFavs([])
        getFavs({jwt}).then(setFavs)
    }, [jwt])

    return(
        <Context.Provider value={{ favs, setFavs, jwt, setJWT }}>
            {children}
        </Context.Provider>
    )
}