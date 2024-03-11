'use client'
import React, {useState, useEffect} from "react";
import axios from 'axios';



export default function Clients(){

    const [name,setName]=useState("");
    const [users,setUsers] = useState([]);
    const [newUser,setNewUser] = useState(false);
    
    
    const [formDataClass, setFormDataClass] = useState({name:'', surname:'', email:''});

    // Function to handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDataClass(prevState => ({
            ...prevState,
            [name]: value
        }));
        }

      const save = async ()=>{
          try {
              const response = await axios.post('url',formDataClass);
              alert(response.data.message);
          } catch (error) {
              console.log(error);
          }
      }




    const searchUsers = async () => {
      
      try {
        const response = await axios.get("https://dummyjson.com/users/search?q="+name);
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    }

    
    useEffect(() => {
    const getUsers = async ()=>{
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

    const enterPress = (e) => {
      if(e.key === 'Enter'){
        searchUsers();
      }
    }

    const redirectUser = (userId)=>{
      window.location.href = `/client?id=${userId}`;
    }




    return(
     
<div className="content">
  <div><h1>Seja Bem Vindo ao Sistema de Gestão V1.0</h1></div>
  <div className="formulary">
    <div><h3>Lista de Clientes</h3></div>

    <div className="formButtons">
      <button onClick={() => setNewUser(true)}>Novo</button>
      <button>Deletar</button>
    </div>

    {newUser ? (
      <div>          
        <form>
        <label>Username:</label><input name="name" type="text" value={formDataClass.name} onChange={handleInputChange} placeholder="Insert Your Name" />
        <label>Surname:</label><input name="surname" type="text" value={formDataClass.surname} onChange={handleInputChange} placeholder="Insert Car Brand" />
        <label>Email:</label><input name="email" type="text" value={formDataClass.email} onChange={handleInputChange} placeholder="Insert Car Plate" />

            <div className="formButtons">
              <button type="button" onClick={()=>{setNewUser(false)}}>Voltar</button>
              <button type="button" onClick={()=>{save}}>Salvar</button>
            </div>
        </form>
      </div>
    ) : (
      <div>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} onKeyUp={enterPress} placeholder="Search for a username" />
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Birthday</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} onClick={() => redirectUser(user.id)}>
                  <td>{user.id}</td>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.birthDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
</div>

    );
}
