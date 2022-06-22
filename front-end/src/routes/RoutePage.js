import {Routes,Route} from "react-router-dom"
import EditUser from "../components/Edit";
import Home from "./Home";

const RoutePage = ({user,}) => {
    return ( 
        <>
            <Routes>
                <Route path="/" >
                    <Route index element={<Home user={user} />} />
                    <Route path="/:id" element={<EditUser  />} />
                </Route>
            </Routes>
        </>
     );
}
 
export default RoutePage;