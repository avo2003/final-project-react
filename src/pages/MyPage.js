import React, { useState, useEffect } from "react";
import '../App.css';
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); /*tarnale esksav */

  useEffect(() => {
    const fetchUsers = async () => {
      try{
      const response = await fetch("http://localhost:8000/api/instagrams");
      const users = await response.json();
      setData(users);
      setIsLoading(false); /* tarnale verchantsav  */
    }catch(error){
      console.log(error);
      
    }
    };
    fetchUsers();

    
  }, []);

  const renderUser = () => {
    if (isLoading) return <div><img src='https://thumbs.gfycat.com/UnitedSmartBinturong-small.gif'></img></div>


    
    ;


    return (
      <div>
        <div>
          {data.map(user => (
            <div key={user._id}> 
            
  
            <img src={user.avatar}/>
              <h2> {user .name}</h2>
              <h2> {user.username}</h2>
              <br/>
         
           <hr/>
           
           <br/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return <div>{renderUser()}</div>;
}

