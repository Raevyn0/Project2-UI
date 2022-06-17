import { SyntheticEvent, useState } from "react";
import { User } from "../models/user";

interface IRegisterProps {

}


function Register(props: IRegisterProps){

    let [username, setUser] = useState('');
    let [password, setPass] = useState('');
    let [errMsg, setErrMsg] = useState('');

    let updateInput = (e: SyntheticEvent) => {
        let box = e.target as HTMLInputElement;
        if(box.id === "reg-user"){
            setUser(box.value);
        }
        else if(box.id === "reg-pass"){
            setPass(box.value);
        }
    }

    let register = (e: SyntheticEvent) => {
        if(!username || !password){
            if(!username)   setErrMsg('Please enter a username!');
            else setErrMsg('Please enter a password!');
        }
    }

    try{
        //backend
    } catch(e){
        //exception
    }


    return(
        <>
            <h1>Register</h1>
            <div id="reg-form">
                <input type="text" id="reg-user" placeholder="Username" onChange={updateInput}/>
                <br/>
                <input type="text" id="reg-pass" placeholder="Password" onChange={updateInput}/>
                <br/>
                <button id="reg-btn" onClick={register}>Sign Up</button>
            </div>

            { errMsg ?
                <div>
                    <p className="error">{errMsg}</p>
                </div> : <></>
            }

        </>
    )
}

export default Register;