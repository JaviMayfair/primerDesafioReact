import { useState } from "react";

const MyLogin= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
  
    const validarDatos = (e) => {
      e.preventDefault()
      
      if(email === '' || password === '' || password.length < 6) {
          setError(true)
          return
      }
      setError(false)
      setEmail('')
      setPassword('')
    }
  
    return (
      <>
      <div style={{width: "500px",border: "solid 2px", padding: "10px", margin: "20px", backgroundColor: "#d9dada", display: "flex", justifyContent: "space-around"}}>
        <form style={{width: "400px"}} className="formulario" onSubmit={validarDatos}>
          <div>
            <h3><strong>Iniciar Sesión</strong></h3>
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
          {error ? <p style= {{color:"red"}}>¡Verifica todos los campos!</p> : <p style={{color: "green"}}>¡Inicio de sesión exitoso!</p>}
          <button type="submit" className="btn btn-primary" style={{margin: "20px"}}>
            Enviar
          </button>
        </form>
        </div>

      </>
    );
  };
  
  export default MyLogin;