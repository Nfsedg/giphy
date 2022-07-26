import useUser from "hooks/useUser";
import { useEffect } from "react";
import { useState } from "react"
import { useLocation } from "wouter";

export default function Login ({onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [_, navigate] = useLocation();
    const { login, isLogged, isLoginLoading, hasErrorLogin } = useUser();

    useEffect(() => {
      if (isLogged) {
            navigate('/')
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username, password })
        // navigate('/')
    };

    return(
        <>
        {isLoginLoading && <strong>Checking credentials...</strong>}
        {!isLoginLoading &&
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input placeholder="username" type="text" onChange={e => setUsername(e.target.value)} value={username}/>
                </label>
                <label>Password
                    <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                </label>
            </form>
        }
        {
            hasErrorLogin && <strong>Credentials are invalid</strong>
        }
        </>
    )
}