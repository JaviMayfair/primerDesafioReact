import React, { useState, useEffect } from 'react'
import CardPizza from '../components/CardPizza';
import { useParams } from 'react-router-dom';

export default function MyPizza() {
    const [pizza, setPizza] = useState()
    const [info, setInfo] = useState("");
    const {id} = useParams();

    const consultarApi = async () => {
        const response = await fetch("http://localhost:5000/api/pizzas/" + id);
        const data = await response.json();
        setPizza(data)
    };

    useEffect(() => {
        consultarApi();
    }, []);

    return (
        <>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {pizza && <CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} desc={pizza.desc} />}
                
            </div>
        </>
    )
}

