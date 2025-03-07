import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()

  const [inputs, setInputs] = useState([])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value }))

  }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8888/api/LogIn.php', inputs)
        .then(function(response){
            console.log(response.data);
            navigate('/');
        })
        .catch(function(error){
            console.error('fail', error);
        })
        
    }

  return (
    <section className="loginUserSection">

      <h2>LogIn</h2>
      
      <form onSubmit={handleSubmit} >
      
      <table cellSpacing={10}>
        <tbody>
          <tr>
            <th>
              <label htmlFor="">User Name: </label>
            </th>
            <td>
              <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="">Password: </label>
            </th>
            <td>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            </td>
          </tr>

          <tr>
  
            <td colSpan={2} align="right">
            <button type="submit">Login</button>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </section>
  );
};
