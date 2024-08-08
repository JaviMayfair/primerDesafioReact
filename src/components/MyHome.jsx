import React from 'react'
import CardPizza from './CardPizza'
import MyHeader from './MyHeader'

function MyHome() {
    return (
        <>
            <header>
                <MyHeader />
            </header>

            <div style={{ display: 'flex' }}>
                <CardPizza
                    name="Napolitana"
                    price={5950}
                    ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="https://osojimix.com/wp-content/uploads/2022/06/Para-la-masa-de-pizza-napolitana-8-hrs-fermentacion-Web-1-500x500.jpg" />
                <CardPizza name="Española"
                    price={6950}
                    ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    img="https://tofuu.getjusto.com/orioneat-prod/hxKvuFTvDujRYh8bG-WhatsApp%20Image%202022-04-15%20at%202.40.47%20PM%20(1).jpeg" />
                <CardPizza
                    name="Pepperoni"
                    price={6950}
                    ingredients={["mozzarella", "pepperoni", "orégano"]} img="https://ca.ooni.com/cdn/shop/articles/Ooni_Diablo_resized_6fdb6499-e70d-4f77-96ac-cdb65ad4090f.jpg?crop=center&height=800&v=1657040361&width=800" />
            </div>
        </>
    )
};

export default MyHome
