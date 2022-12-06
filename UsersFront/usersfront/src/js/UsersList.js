import React, { useEffect } from "react";
import { useState } from "react";
import User from "./User";
import Table from "react-bootstrap/Table";

export default function UsersList() {
  const API_URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <>
      <div className="bg-light border my-2 mt-2 rounded">
        <h3 className="p-2">User registry Spring Boot + MySQL</h3>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Mail</th>
          </tr>
        </thead>

        <tbody>
          {users.map(({ id, name, username, email }) => (
            <User
              key={id}
              index={id}
              name={name}
              username={username}
              email={email}
            ></User>
          ))}
        </tbody>
      </Table>
    </>
  );
}
