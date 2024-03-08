'use client'
import React from "react";
import axios from 'axios';



export default function employees(){

 
  const formDataClass = {name:'',surname:'',email:''}

  async function login() {
    try {
      const response = await axios.post("/api/submitFormData",formDataClass);
      alert("Hello");
    } catch (error) {
      console.log(error);
    }
  }


    return(
     
        <div className="content">
        <div><h1>Seja Bem Vindo ao Sistema de Gestão V1.0</h1></div>
        <div className="formulary">
          <div><h3>Formulário de Empregados</h3></div>
          <div>
          <form>
                <input name="name" type="text" value={formDataClass.name} onChange={(e)=>formDataClass.name=e.target.value} placeholder="Insert Your Name"></input>
                <input name="surname" type="text" value={formDataClass.surname} onChange={(e)=>formDataClass.surname=e.target.value} placeholder="Insert Your Surname"></input>
                <input name="email" type="email"value={formDataClass.email} onChange={(e)=>formDataClass.email=e.target.value} placeholder="Insert your Email"></input>
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
