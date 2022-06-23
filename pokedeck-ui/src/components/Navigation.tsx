import { useNavigate } from "react-router-dom";

function Navigation() {

    const navigate = useNavigate();

    function goTo(route: string) {
        navigate(route);
    }

    return(
        <>
            <h1 onClick={() => goTo("/")}>Login</h1>
            <h1 onClick={() => goTo("/register")}>Register</h1>
        </>
    )

}

export default Navigation;