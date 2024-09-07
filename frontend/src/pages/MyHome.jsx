import React, { useState, useEffect } from 'react'
import CardPizza from '../components/CardPizza'
import MyHeader from '../components/MyHeader'
import { pizzas } from '../data/pizzas'

function MyHome() {
    const [listaPizzas, setListaPizzas] = useState([])
    const [info, setInfo] = useState("");

    const consultarApi = async () => {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setListaPizzas(data)
        };

        useEffect(() => {
            consultarApi();
            }, []);

    return (
        <>

           <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {listaPizzas.map((pizza) => (
                    <CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img}/>
                ))}
            </div>
        </>
    )
};

export default MyHome
