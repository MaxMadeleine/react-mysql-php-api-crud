import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
    const navigate = useNavigate()

  const [inputs, setInputs] = useState([])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value }))

  }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8888/api/user/save', inputs)
        .then(function(response){
            console.log(response.data);
            navigate('/');
        })
        .catch(function(error){
            console.error('fail', error);
        })
        
    }

  return (
    <section className="createUserSection">

      <h2>Create user</h2>
      
      <form onSubmit={handleSubmit} >
      
      <table cellSpacing={10}>
        <tbody>
          <tr>
            <th>
              <label htmlFor="">Name: </label>
            </th>
            <td>
              <input type="text" name="name" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="">Email: </label>
            </th>
            <td>
              <input type="text" name="email" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="">Mobile: </label>
            </th>
            <td>
              <input type="text" name="mobile" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
            <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </section>
  );
};
