import React, { useState } from 'react'
import CardPizza from './CardPizza'
import MyHeader from './MyHeader'
import { pizzas } from '../data/pizzas'


function MyHome() {
    const [listaPizzas, setListaPizzas] = useState(pizzas)


    return (
        <>
            <header>
                <MyHeader />
            </header>

           {/* <div style={{ display: 'flex'}}>
                {listaPizzas.map((pizza) => (
                    <CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img}/>
                ))}
            </div>*/}
        </>
    )
};

export default MyHome
