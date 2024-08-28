import React, { useState } from 'react'
import { pizzas } from '../data/pizzas'
import CardPizza from './CardPizza'



export default function MyCart() {

    const [listaPizzas, setListaPizzas] = useState(pizzas)
    const [cantidadPizzas, setCantidadPizzas] = useState([])
    const [totalPagar, setTotalPagar] = useState(0)

    const actualizarTotal = (name, cuenta, price) => {
        setTotalPagar(totalPagar + price)
        //[{name: Napolitana, cuenta: 1}, {name: Española, cuenta: 2}]

        let index = cantidadPizzas.findIndex(pizza => pizza.name == name)
        if (index == -1) {
            cantidadPizzas.push({ "name": name, "cuenta": cuenta })
        }
        else {
            console.log(cuenta);
            if (cuenta == 0) {
                let newCantidadPizzas = cantidadPizzas.filter(pizza => pizza.name != name)
                setCantidadPizzas(newCantidadPizzas)
            }
            else {
                cantidadPizzas[index].cuenta = cuenta
                setCantidadPizzas(cantidadPizzas)
            }
        }
    }


    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {listaPizzas.map((pizza) => (
                    <CardPizza actualizarTotal={actualizarTotal} key={pizza.id} id={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />
                ))}
            </div>

            <div style={{ border: 'solid 2px', margin: '10px', width: '500px', textAlign: 'justify', padding: '10px', backgroundColor: '#c1c5c8' }}>
                <h2>Carrito de Compras 🛒:</h2>
                <div style={{ border: 'solid 2px' }}>
                    <h4>🍕 Cantidad de Pizzas:

                        {cantidadPizzas.map((pizza, i) => (<li key={i}>
                            {pizza.name}x{pizza.cuenta}
                        </li>))}
                    </h4>
                    <h4>🪙 Total a pagar: {totalPagar}</h4>
                </div>
                <button style={{ border: 'solid', margin: '5px' }}>Pagar 👛</button>

            </div>

        </>

    )
}
