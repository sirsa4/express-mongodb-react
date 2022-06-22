
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import RoutePage from './routes/RoutePage';



function App() {
  const [user, setUser] = useState(null);


  const getUsers = async ()=>{
    try {
      const {data: {users}} = await axios.get("/api/v1/users");
      setUser(users)
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getUsers();
  },[]);
  return (
    <div className="App">
      <RoutePage user={user} />
    </div>
  );
}

export default App;
