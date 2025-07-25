import { useContext } from "react"
import UserContext from "./UserContext"



function UserProfile()
{
    const UserData = useContext(UserContext) 
    return (
        <div>
            <h2>{UserData.name}</h2>
            <p>Age: {UserData.age}</p>
            <p>Bio: {UserData.bio}</p>
        </div>
    )
}

export default UserProfile


