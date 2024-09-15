import { createContext, useState } from "react";
import { pizzas } from "../data/pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [listaPizzas, setListaPizzas] = useState({})
    const  [totalPagar, setTotalPagar] = useState(0)

    const sumarPizza = (pizza) => {
        let newListaPizzas = {...listaPizzas}
        
        if(
            !Object.keys(newListaPizzas).includes(pizza.name)
        ){
            newListaPizzas[pizza.name] = {name:pizza.name, id:pizza.id, img:pizza.img, ingredients:pizza.ingredients, price:pizza.price, qty:0}
        }
        newListaPizzas[pizza.name].qty +=1
        setListaPizzas(newListaPizzas)
        setTotalPagar(totalPagar + pizza.price)
      }

    const restarPizza = (pizza) => {
        if(
            !Object.keys(listaPizzas).includes(pizza.name)
        ){
            return;
        }
        let newListaPizzas = {...listaPizzas}
        newListaPizzas[pizza.name].qty -=1
        setTotalPagar(totalPagar -pizza.price)
        if(
            newListaPizzas[pizza.name].qty ==0
        )
        delete newListaPizzas[pizza.name]
        setListaPizzas(newListaPizzas)
    }

    return (
        <CartContext.Provider value={{totalPagar, sumarPizza, restarPizza, listaPizzas}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;