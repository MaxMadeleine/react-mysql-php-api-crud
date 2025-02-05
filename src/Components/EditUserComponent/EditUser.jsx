import { useState } from "react";
import axios from "axios";

export const EditUser = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value }))

  }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8888/api/user/save', inputs)
        console.log(inputs);
        
    }

  return (
    <section className="editUserSection">

      <h2>edit user</h2>
      
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
