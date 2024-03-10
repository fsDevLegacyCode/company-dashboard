
'use client'
import React, {useState, useEffect} from "react";
import axios from 'axios';



export default function Carts(){

    const [id,setId]=useState("");
    const [carts,setCarts] = useState([]);
    
    
    const searchCart = async () => {
      
      try {
        const response = await axios.get("https://dummyjson.com/carts/user/"+id);
        setCarts(response.data.carts);
      } catch (error) {
        console.log(error);
      }
    }
    const getCarts = async ()=>{
      try {
        const response = await axios.get("https://dummyjson.com/carts");
        setCarts(response.data.carts);
      } catch (error) {
        console.log(error);
      }
    }
    
    useEffect(() => {
      getCarts();
    }, []);

    const enterPress = (e) => {
      if(e.key === 'Enter'){
        searchCart();
      }else{
        getCarts();
      }
    }

    const redirectUser = (userId)=>{
      window.location.href = `/cart?id=${userId}`;
    }




    return(
     
        <div className="content">
        <div><h1>Seja Bem Vindo ao Sistema de Gestão V1.0</h1></div>
        <div className="formulary">
          <div><h3>Lista de Carrinhos</h3></div>
          <div><input name="id" value={id} onChange={(e)=>{setId(e.target.value)}} onKeyUp={enterPress} placeholder="Search for a user Id"></input></div>
              <div>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>User ID</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carts ?  
                    carts.map(cart => (
                      
                      <tr key={cart.id} onClick={() => redirectUser(cart.id)}>
                        <td>{cart.id}</td>
                        <td>{cart.userId}</td>
                        <td>{cart.totalProducts}</td>
                        <td>{cart.totalQuantity}</td>
                        <td>{cart.discountedTotal}</td>
                        <td>{cart.total}</td>
                      </tr>
                    )) 
                    : 
                    <div>Loading...</div>
                  }
                </tbody>
              </table>
              </div>
          </div>
        

        
      </div>
    );
}
