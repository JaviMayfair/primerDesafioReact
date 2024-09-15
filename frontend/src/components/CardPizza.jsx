import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CardPizza(props) {
  const {sumarPizza, restarPizza} = useContext(CartContext)
  



  return (
    <>
      <div className="MyCards">
        <Card style={{ width: '22rem', textAlign: 'center' }}>
          <Card.Img style={{ width: '18rem', height: '18rem', margin: "10px auto" }} variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              Ingredientes:
              <ul>
                {props.ingredients.map((ingrediente, i) => (
                  <li key={i}>{ingrediente}</li>
                ))}
              </ul>
              <br></br>
              Precio: $
              <span className="text-primary fs-6">{props.price}</span>
              <br />
              <strong>Descripción:</strong> {props.desc}
            </Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="primary" onClick={() => {restarPizza(props)}}>Eliminar 🗑️</Button>
              {
                props.qty && <span style={{ border: 'solid 2px', padding: '5px' }}>Cantidad: <br />{props.qty}</span>
              }
              <Button variant="primary" onClick={() => {sumarPizza(props)}}>Añadir 🛒</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
};

