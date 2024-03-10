'use client'
export const dynamic = "force-dynamic";

import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useSearchParams } from 'next/navigation'


export default function Cart(){


    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [cart, setCart] = useState([]);

    const redirectUser = ()=>{
      window.location.href = `/carts`;
    }


    const getCart = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/carts/"+id);  
            setCart(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCart();
    }, [id]);




    return(
     
        <div className="content">
        <div><h1>Seja Bem Vindo ao Sistema de Gestão V1.0</h1></div>
        <div className="formulary">
          <div><h3>Dados do Carrinho</h3></div>
            <div>
            <table>
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Discount(Absolute)</th>
                    <th>Discount(%)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                {cart && cart.products && Array.isArray(cart.products) ?
                    cart.products.map(product => (
                        <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.discountedPrice}</td>
                        <td>{product.discountPercentage}</td>
                        <td>{product.total}</td>
                        </tr>
                    ))
                    :
                    <tr><td colSpan="7">Loading...</td></tr>
}  
                { <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>{cart.discountedTotal}</th>
                    <th></th>
                    <th>{cart.total}</th>
                  </tr>}
                </tbody>
              </table>
              
            </div>
          </div>
          
          <div style={{marginTop:"10px"}} className="formButtons">
                  <button type="button" onClick={redirectUser}>Voltar</button>
                 
          </div>

        
      </div>
    );
}
