import { SyntheticEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getTokenSourceMapRange } from "typescript";
import { User } from "../models/user";

interface ILoginProps {
    currentUser: User | undefined, // union types (this or that)
    setCurrentUser: (nextUser: User) => void
}

function Login(props: ILoginProps) {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("")

    let updateUsername = (event: SyntheticEvent) => {
        setUsername((event.target as HTMLInputElement).value)
    }
    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value)
    }

    let login = async (e:SyntheticEvent) => {

        e.preventDefault();
        
        if (!username || !password) {
            setErr("Invalid input: Please enter a username and password");
        } else {
            setErr("");
        }

        try {
            let resp = await  fetch('http://project2api-env.eba-hirmx2sb.us-west-1.elasticbeanstalk.com/pokedecks/auth', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });

            if (resp.status != 200) {
                setErr("Invalid username and password");
            } else {
                console.log(`User ${username} logged in!`);
                props.setCurrentUser(await resp.json());
                navigate("/dashboard")
            }

        } catch (err) {
            console.log(err);
        }


    }

    
    
    return(
        <>
            <h1>Login</h1>
            <div id="login-form">
                <input type="text" id="login-username" placeholder="Enter your username" onChange={updateUsername}/>
                <br/>
                <input type="password" id="login-password" placeholder="Enter your password" onChange={updatePassword} />
                <br/>
                <button id="login-button" onClick={login}>Login</button>
            </div>

            {
                err ?
                <p>{err}</p> :
                <>
                </>
            }
        </>
    )

}

export default Login;

