import Form from "../components/form";
import Users from "../components/Users";

const Home = ({user,}) => {
    return ( 
        <>
        <main>
            <Form  />
            <Users user={user} />
        </main>
        </>
     );
}
 
export default Home;