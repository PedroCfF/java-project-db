import React from "react";

export default function User(props) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
    </tr>
  );
}
