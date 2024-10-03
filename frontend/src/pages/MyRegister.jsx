import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const MyRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState ("");
    const [error, setError] = useState(false)
    const {register} = useContext(UserContext)
  
    const validarDatos = (e) => {
      e.preventDefault()
      
      if(email === '' || password === '' || confirmarPassword === '' || password != confirmarPassword || password.length < 6 || confirmarPassword.length < 6) {
          setError(true)
          return
      }
      setError(false)
      setEmail('')
      setPassword('')
      setConfirmarPassword('')
      register(email, password)
    }
  
    return (
      <>
      <div style={{width: "500px",border: "solid 2px", padding: "10px", margin: "20px", backgroundColor: "#d9dada", display: "flex", justifyContent: "space-around"}}>
        <form className="formulario" onSubmit={validarDatos}>
          <div>
            <h3><strong>Formulario de Registro</strong></h3>
          </div>
          <div className="form-group">
            <label><strong>Email</strong></label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label><strong>Password</strong></label>
            <input
              type="text"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <label><strong>Confirmar Password</strong></label>
            <input
              type="text"
              name="confirmarPassword"
              className="form-control"
              onChange={(e) => setConfirmarPassword(e.target.value)}
              value={confirmarPassword}
            />
            {}
          </div>
          {error ? <p style= {{color:"red"}}>¡Verifica todos los campos!</p> : null}
          <button type="submit" className="btn btn-primary" style={{margin: "20px"}}>
            Enviar
          </button>
        </form>
        </div>

      </>
    );
  };
  
  export default MyRegister;
  
