import { useContext, useCallback, useState } from "react";
import Context from "context/StaticContext";
import loginService from "services/login";
import addFavService from "services/addFav"

export default function useUser () {
    const {favs, setFavs, jwt, setJWT} = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false })

    const login = useCallback(({ username, password }) => {
        setState({ loading: true, error: false })
        loginService({ username, password })
            .then(jwt => {
                window.localStorage.setItem('jwt', jwt)
                setState({ loading: false, error: false })
                setJWT(jwt)
            })
            .catch(err => {
                window.localStorage.removeItem('jwt', jwt)
                setState({ loading: false, error: true })
                console.error(err)
            })
    }, [jwt, setJWT])

    const addFav = useCallback(({id}) => {
        addFavService({ id, jwt })
            .then(favs => setFavs(favs))
            .catch(err => {
                console.error(err)
            })
    }, [jwt, setFavs])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])


    return {
        favs,
        addFav,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasErrorLogin: state.error,
        login,
        logout
    }
};