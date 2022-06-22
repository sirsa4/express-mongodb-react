import axios from "axios";
import { useState } from "react";

const Form = ({method}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const createUser = async (e)=>{
        e.preventDefault();
        try {
            const newUser = await axios.post("/api/v1/users",{
                userName: userName,
                password: password,
                email: email
            });
            console.log(userName, password, email);
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <>
        <form onSubmit={createUser}>
            <label htmlFor="userName">
                User name:
                <input type="text" name="userName" id="useName" 
                onChange={(e)=>setUserName(e.target.value)}
                value={userName}
                />
            </label>
            <label htmlFor="password">
                password:
                <input type="password" name="password" id="password" 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                />
            </label>
            <label htmlFor="email">
                Email:
                <input type="email" name="email" id="email" 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />
            </label>
            <button type="submit">Create User</button>
        </form>
        </>
     );
}
 
export default Form;