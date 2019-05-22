import React from 'react';
import {NavLink} from 'react-router-dom';
import Search from "../pages/SearchBar"

export default function Navigation() {
  const [data,setData]=useState([])
  const searchItem=async(name)=>{
    const response =await fetch(`http://localhost:8000${name}`)
    const res = await response.json();
    console.log(res)
    return(
      <div></div>
    )
  };
  return (
    <div>
<nav className='Nav'>
<NavLink className='Nav-link' activeClassName='is-active' exact to='/'>Home</NavLink>

<NavLink className='Nav-link' activeClassName='is-active' to='/MyPage'>my page</NavLink>

</nav>
<Search className="search" handleSearch={searchItem}/>
</div>
  )
}


