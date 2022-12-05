import React, { useEffect } from 'react';
import { useState } from 'react';
import User from "./User"


export default function UsersList() {
  const API_URL="http://localhost:8080/users";
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();    
    return data;
  };

  useEffect(() => {
    getUsers().then((data) => {
        setUsers(data);
    })  
  }, []);

  console.log(users[1].name)

  return (
    <>
    <div>
        {users.map((user) => (
            <User user={user}></User>
        ))}
    </div>
    </>
    
  )
}
