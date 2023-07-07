import { useEffect, useState } from "react";
import UserData from "./components/userData.jsx";



const App = () => {

  const API = "https://api.gyanibooks.com/library/get_dummy_notes/";
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async (url) => {
      try 
      {
          const res = await fetch(url);
          const data = await res.json();
          if (data.length > 0) 
          {
            const sortedData = data.sort((a, b) => a.id - b.id);
            setUsers(sortedData);
          }
          console.log(data);
      } 
      catch (e) 
      {
          console.error(e);
      }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Title</th>
            <th>Category</th>
            {/* <th>Notes</th> */}
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
