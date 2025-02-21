import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({}); // Initialize as an object
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost:8888/api/users`) // Fetch all users
      .then(function (response) {
        console.log('Fetched user data:', response.data);
        const user = response.data.find(user => user.id === parseInt(id)); // Find the user by id
        if (user) {
          setInputs(user); // Set the specific user data
        } else {
          console.error('User not found');
        }
        setLoading(false); // Set loading to false after data is fetched
      })
  
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:8888/api/user/${id}/edit`, inputs) // Use axios.put for updating
      .then(function (response) {
        console.log('Updated user data:', response.data);
        navigate('/');
      })
      .catch(function (error) {
        console.error('Error updating user:', error);
      });
  }

  if (loading) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <section className="editUserSection">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="name">Name: </label>
              </th>
              <td>
                <input value={inputs.name || 'Not Found'} type="text" name="name" onChange={handleChange} /> {/* Use fallback value */}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="email">Email: </label>
              </th>
              <td>
                <input value={inputs.email || 'Not Found'} type="text" name="email" onChange={handleChange} /> {/* Use fallback value */}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="mobile">Mobile: </label>
              </th>
              <td>
                <input value={inputs.mobile || 'Not Found'} type="text" name="mobile" onChange={handleChange} /> {/* Use fallback value */}
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="right">
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
};