'use client'
import React, {useState} from "react";
import axios from 'axios';



export default function employees(){

 
  const [formDataClass, setFormDataClass] = useState({name:'',surname:'',email:''});

  async function login() {
    try {
      const response = await axios.post("/api/submitFormData",formDataClass);
      alert("Hello");
    } catch (error) {
      console.log(error);
    }
  }

    // Function to handle form field changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormDataClass(prevState => ({
        ...prevState,
        [name]: value
      }));
    }


    return(
     
        <div className="content">
        <div><h1>Seja Bem Vindo ao Sistema de Gestão V1.0</h1></div>
        <div className="formulary">
          <div><h3>Formulário de Empregados</h3></div>
          <div>
          <form>
          <input name="name" type="text" value={formDataClass.name} onChange={handleInputChange} placeholder="Insert Your Name" />
            <input name="surname" type="text" value={formDataClass.surname} onChange={handleInputChange} placeholder="Insert Your Surname" />
            <input name="email" type="email" value={formDataClass.email} onChange={handleInputChange} placeholder="Insert your Email" />
                <div className="formButtons">
                  <button type="button">Save</button>
                  <button type="button" onClick={login}>Submit</button>
                  
                </div>
            </form>
          </div>
        </div>

        
      </div>
    );
}
