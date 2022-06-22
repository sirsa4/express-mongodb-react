import Delete from "./Delete";
import {Link} from "react-router-dom"

const Users = ({user}) => {
    return ( 
        <>
            <section>
                <h1>Existing users</h1>
                {user?.map((person)=>{
                    const {_id: id,userName,password,email} = person;
                    return <article key={id}>
                        <h2>User name: {userName}</h2>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                        <Delete id={id} />
                        <button type="button"><Link to={id}>Edit User</Link></button>
                    </article>
                })}
            </section>
        </>
     );
}
 
export default Users;
