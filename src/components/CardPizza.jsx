import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function CardPizza(props) {
  return (
    <>
    <div className="MyCards">
    <Card style={{ width: '22rem', textAlign:'center'}}>
        <Card.Img style={{width: '18rem', height: '18rem', margin:"10px auto"  }} variant="top" src={props.img}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                Ingredientes: {props.ingredients.join(", ")}
                <br></br>
                Precio: $
                <span className="text-primary fs-6">{props.price}</span>
            </Card.Text>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="primary">👀 Ver Más...</Button>
            <Button variant="primary">Añadir 🛒</Button>
            </div>
        </Card.Body>
    </Card>
    </div>
    </>
  )
};

