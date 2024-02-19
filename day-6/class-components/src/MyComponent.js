import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      selectedUser: null,
      loading: true,
      error: null,
      searchInput: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ users: data, filteredUsers: data, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  handleSearchChange = event => {
    const { value } = event.target;
    this.setState({ searchInput: value }, () => {
      this.filterUsers();
    });
  };

  filterUsers = () => {
    const { users, searchInput } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ filteredUsers });
  };

  handleUserClick = user => {
    this.setState({ selectedUser: user });
  };

  render() {
    const { filteredUsers, selectedUser, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>User List</h1>
        <input
          type="text"
          placeholder="Search by name"
          onChange={this.handleSearchChange}
        />
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id} onClick={() => this.handleUserClick(user)}>
              {user.name}
            </li>
          ))}
        </ul>
        {selectedUser && (
          <div>
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserList;
