import React from "react";

function UsersList() {

  const users = [
    { id: 1, name: "John Doe", email: "john@mail.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@mail.com", role: "Staff" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default UsersList;
