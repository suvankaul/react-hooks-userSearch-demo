import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState('');

  //If the useEffect is to be fired on any of the state var changes
  // useEffect(() => {
  //   console.log("change")
  // })

  //If the useEffect is to be fired on specific state var changes
  useEffect(() => {
    if(searchText.length > 0){
      fetch(`https://jsonplaceholder.typicode.com/users?username=${searchText}`).then(response => response.json()).then(data => {
      setUser(data[0])
      }).catch(e => {
        console.log(e)
      })
    }
  },[searchText])

  //If the useEffect is to be fired only once on component load
  // useEffect(() => {
  //   console.log("change")
  // },[])

  return (
    <div>
      <div>
        <input type="search" placeholder="Search User..." value={searchText} onChange = {(event) => setSearchText(event.target.value)} />
      </div>
      <h3>User Information</h3>
      { user ? 
        <div>
          <div>{user.name}</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.website}</div>
          <div>{user.address.suite} {user.address.street} {user.address.city} {user.address.zipcode}</div>
          <div>{user.company.name}</div>
        </div> :
          <div>No user found!</div>
        }      
    </div>
  );
}

