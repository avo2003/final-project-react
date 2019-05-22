import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';  
import '../App.css';
import '../homeform.css';
import SearchBar from './SearchBar';


export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); /*tarnale esksav */

  useEffect(() => {
    const fetchUsers = async () => {
      try{
      const response = await fetch("http://localhost:8000/api/instagrams");
      const users = await response.json();
      console.log(users);
      
      setData(users);
      setIsLoading(false); /* tarnale verchantsav  */
    }catch(error){
      console.log(error);
      
    }
    };
    fetchUsers();

    
  }, []);

  const renderUser = () => {
    if (isLoading) return <div><img src='https://cdn.dribbble.com/users/80078/screenshots/995621/loading.gif'></img></div>

    
    
    ;

    return (
      <div>
        <div>
          {data.map(user => (
        <div key={user._id}> 
           
    
             <br/><br/><br/>
<div  className="a1">
	<div  className="c2"><Link to={`/instagram/${user._id}`} className='ui right floated button'>
					
				
		<img  className="avatar" src={user.avatar}  alt="avatar"/>
		<h3> {user.name} {user.username}</h3>	</Link> 
	</div>
  

<img  className="a2" src={user.img1}  alt="avatar"/>
<div className="c1"> <img  className="c4" id="myImagee" src="https://i.dlpng.com/static/png/1706846_thumb.png" onclick="document.getElementById('myImagee').src='https://i.dlpng.com/static/png/1517938_thumb.png'"  alt="avatar"/></div>
 
</div>


<br/><br/><br/>
<div  className="a1">
	<div  className="c2">
  <Link to={`/instagram/${user._id}`} className='ui right floated button'>
		<img  className="avatar" src={user.avatar}  alt="avatar"/>
		<h3> {user.name} {user.username}</h3></Link> 
	</div>
  

<img  className="a2" src={user.img2}  alt="avatar"/>
<div className="c1"> <img  className="c4" id="myImagee" src="https://i.dlpng.com/static/png/1706846_thumb.png" onclick="document.getElementById('myImagee').src='https://i.dlpng.com/static/png/1517938_thumb.png'"  alt="avatar"/></div>
</div>


             <br/><br/><br/>
<div  className="a1">
	<div  className="c2">
  <Link to={`/instagram/${user._id}`} className='ui right floated button'>
		<img  className="avatar" src={user.avatar}  alt="avatar"/>
		<h3> {user.name} {user.username}</h3></Link> 
	</div>
  

<img  className="a2" src={user.img3}  alt="avatar"/>
<div className="c1"> <img  className="c4" id="myImagee" src="https://i.dlpng.com/static/png/1706846_thumb.png" onclick="document.getElementById('myImagee').src='https://i.dlpng.com/static/png/1517938_thumb.png'"  alt="avatar"/></div>
</div>
           


                        <br/><br/><br/>
<div  className="a1">
	<div  className="c2">
  <Link to={`/instagram/${user._id}`} className='ui right floated button'>
		<img  className="avatar" src={user.avatar}  alt="avatar"/>
		<h3> {user.name} {user.username}</h3></Link> 
	</div>
  

<img  className="a2" src={user.img4}  alt="avatar"/>
<div className="c1"> <img  className="c4" id="myImagee" src="https://i.dlpng.com/static/png/1706846_thumb.png" onclick="document.getElementById('myImagee').src='https://i.dlpng.com/static/png/1517938_thumb.png'"  alt="avatar"/></div>
</div>


             <br/><br/><br/>
<div  className="a1">
	<div  className="c2">
  <Link className="hh3" to={`/instagram/${user._id}`} className='ui right floated button'>
		<img  className="avatar" src={user.avatar}  alt="avatar"/>
		<h3> {user.name} {user.username}</h3></Link> 
	</div>
  

<img  className="a2" src={user.img5}  alt="avatar"/>
<div className="c1"> <img  className="c4" id="myImagee" src="https://i.dlpng.com/static/png/1706846_thumb.png" onclick="document.getElementById('myImagee').src='https://i.dlpng.com/static/png/1517938_thumb.png'"  alt="avatar"/></div>
</div>
<br/><br/><br/>
           
           <br/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return <div>{renderUser()}</div>;
}






