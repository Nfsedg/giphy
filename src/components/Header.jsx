import { Link } from "wouter"
import useUser from "hooks/useUser";

export default function Header () {
    // const isLogged = false;
    const {isLogged, logout} = useUser()

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }

    return(
        <header  style={{
            display: "flex",
            justifyContent: "right"
        }}>
            {
                isLogged
                    ?   <Link to="#" onClick={handleClick}>
                            Logout
                        </Link>
                    :   <Link to="/login">
                            Login
                        </Link>
            }
        </header>
    )
};