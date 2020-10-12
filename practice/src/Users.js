import React from "react";

function Users({users}) {
  return (
    <div>
      <h1>Users</h1>
      <p>These are the users:</p>
      <ul>
        {users.map((user) => (
          <table>
            <tr><td> Name: {user.name}</td></tr>
            <tr><td> Age: {user.age}</td></tr>
            <tr><td> ID: {user.id}</td></tr>
          </table>
        ))}
      </ul>
    </div>
  );
}

export default Users;
