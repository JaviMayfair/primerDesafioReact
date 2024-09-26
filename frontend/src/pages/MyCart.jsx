import React, { useState, useContext } from 'react'
import { pizzas } from '../data/pizzas'
import CardPizza from '../components/CardPizza'
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';




export default function MyCart() {
    const {listaPizzas, totalPagar} = useContext(CartContext)
    const {token} = useContext(UserContext)

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Object.values(listaPizzas).map((pizza) => (
                    <CardPizza key={pizza.id} id={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} qty={pizza.qty} />
                ))}
            </div>

            <div style={{ border: 'solid 2px', margin: '10px', width: '500px', textAlign: 'justify', padding: '10px', backgroundColor: '#c1c5c8' }}>
                <h2>Carrito de Compras 🛒:</h2>
                <div style={{ border: 'solid 2px' }}>
                    <h4>🪙 Total a pagar: {totalPagar}</h4>
                </div>
                <button disabled={!token} style={{ border: 'solid', margin: '5px' }}>Pagar 👛</button>

            </div>

        </>

    )
}
