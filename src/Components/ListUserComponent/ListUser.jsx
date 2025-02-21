import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../ListUserComponent/ListUser.scss'

export const ListUser = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
//this a fetch in php
  function getUsers() {
    axios.get(`http://localhost:8888/api/users`).then(function(response){
      console.log(response.data);
      setUsers(response.data);
    });
  }
// think about making every fetch async
  const deleteUser = (id) => {
    try {
         axios.delete(`http://localhost:8888/api/user/${id}/edit`);
        setUsers(users.filter(user => user.id !== id));
    } catch (error) {
        console.error('error deleting user', error);
    }
  };


  return (
    <section className="listUser">
      <h1>List Users</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.actions}</td>
              <td>
                <Link to={`user/${user.id}/edit`}>Edit</Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
