import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, name: 'Hans Wong', age: 22, email: 'hanswong117@gmail.com' },
    { id: 2, name: 'Smok Wid', age: 42, email: '69429@gmail.com' },
    { id: 3, name: 'Whats the F', age: 69, email: 'wtf@hotmail.com' },
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Age:</strong> {user.age}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
