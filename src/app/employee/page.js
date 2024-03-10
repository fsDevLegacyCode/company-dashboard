'use client'
import React, {useState, useEffect, Suspense} from "react";
import axios from 'axios';
import { useSearchParams } from 'next/navigation'



export default function Employee(){


    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [formDataClass, setFormDataClass] = useState({name:'',brand:'',plate:''});

    // Function to handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDataClass(prevState => ({
            ...prevState,
            [name]: value
        }));
        }
    
    const update = async ()=>{
        try {
            const response = await axios.post('url',formDataClass);
            alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const redirectUser = ()=>{
      window.location.href = `/employees`;
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users/' + id);
                const userData = response.data;
                setFormDataClass({
                    name: userData.firstName,
                    surname: userData.lastName,
                    email: userData.email
                });
            } catch (error) {
                console.log(error);
            }
        };
    
        getUser();
    }, [id]);




    return(
        <Suspense>
        <div className="content">
        <div><h1>Seja Bem Vindo ao Sistema de Gestão V1.0</h1></div>
        <div className="formulary">
          <div><h3>Dados do Empregado</h3></div>
          <form>
            <label>Username:</label><input name="name" type="text" value={formDataClass.name} onChange={handleInputChange} placeholder="Insert Your Name" />
            <label>Surname:</label><input name="surname" type="text" value={formDataClass.surname} onChange={handleInputChange} placeholder="Insert Car Brand" />
            <label>Email:</label><input name="email" type="text" value={formDataClass.email} onChange={handleInputChange} placeholder="Insert Car Plate" />

                <div className="formButtons">
                  <button type="button" onClick={redirectUser}>Voltar</button>
                  <button type="button" onClick={update}>Salvar</button>
                </div>
            </form>
          </div>
        

        
      </div>
      </Suspense>
    );
}
