import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";

export default function CardPizza(props) {
  const [cuenta, setCuenta] = useState(0)
  const descontarPizza = () => {
    if (cuenta - 1 < 0) {
      return
    }
    setCuenta(cuenta - 1)
    props.actualizarTotal(props.name, cuenta - 1, props.price * -1)
  }

  const sumarPizza = () => {
    setCuenta(cuenta + 1)
    props.actualizarTotal(props.name, cuenta + 1, props.price)
  }


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
            </Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="primary" onClick={descontarPizza}>Eliminar 🗑️</Button>
              <span style={{ border: 'solid 2px', padding: '5px' }}>Cantidad: <br />{cuenta}</span>
              <Button variant="primary" onClick={sumarPizza}>Añadir 🛒</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
};

