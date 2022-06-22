import axios from "axios";

const Delete = ({id}) => {

    const deleteUser = async ()=>{
        try {
            const remove = await axios.delete(`/api/v1/users/${id}`);
            console.log(remove);
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <>
        <button type="button" onClick={deleteUser}>Delete User</button>
        </>
     );
}
 
export default Delete;