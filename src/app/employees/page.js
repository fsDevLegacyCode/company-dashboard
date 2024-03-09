'use client'
import React, {useState, useEffect} from "react";
import axios from 'axios';



export default function Employees(){

    const [users,setUsers] = useState([]);
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
    return(
     
        <div className="content">
        <div><h1>Seja Bem Vindo ao Sistema de Gestão V1.0</h1></div>
        <div className="formulary">
          <div><h3>Lista de Empregados</h3></div>
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
                  {users ? 
                    users.map(user => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName+" "+user.lastName}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.birthDate}</td>
                      </tr>
                    )) 
                    : 
                    <tr>
                      <td colSpan="5">Loading...</td>
                    </tr>
                  }
                </tbody>
              </table>
              </div>
          </div>
        

        
      </div>
    );
}
