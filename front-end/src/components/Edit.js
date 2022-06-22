import axios from "axios";
import { useEffect, useState } from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import EditForm from "./EditForm";

const EditUser = () => {
    const [user,setUser] = useState(null);

    const {id} = useParams();

    const getUser = async()=>{
        try {
          const {data: {user}} =  await axios.get(`/api/v1/users/${id}`);
          setUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getUser();
    },[]);

    return ( 
        <>
       <main>
            <header>
            <h1>User to edit</h1>

            </header>
        <section>
            {user? <p>User name: {user.userName}</p> : null} 
            {user? <p>Password: {user.password}</p> : null} 
            {user? <p>Email: {user.email}</p> : null} 
        </section>
        <section>
            <h2>Edit User</h2>
            <EditForm />
        </section>
        <Link to="/">Go Back</Link>
       </main>
        </>
     );
}
 
export default EditUser;