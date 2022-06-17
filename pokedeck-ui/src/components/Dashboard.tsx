import { User } from "../models/user";
import { Navigate } from "react-router-dom";

interface IDashboard {
    currentUser: User | undefined
}

function Dashboard (props: IDashboard) {
    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <>
            <h1>Welcome, {props.currentUser.username}!</h1>
        </>
    );

}


export default Dashboard;