import React from 'react'

export default function MyProfile() {
  return (

    <>
    <h1>Mi Perfil 🧙‍♀️</h1>
    <div style={{ display: "flex", justifyContent: "center",}}>
      
      <div style={{ margin: "25px", border: "solid 3px", width: "600px", textAlign: "center", backgroundColor: "#ffe28c" }}>
        <div>
          <img style={{ width: "150px", border: "solid 1px", margin: "10px" }} src="https://static.vecteezy.com/system/resources/previews/015/934/773/non_2x/woman-icon-for-user-profile-female-icon-human-or-people-sign-and-symbol-vector.jpg" alt="" />
        </div>

        <div style={{ padding: "20px" }}>
          <h3><strong>Bienvenid@: </strong>javiera.pacheco@correo.com</h3>
          <button style={{ border: "solid 1px", margin: "10px" }}>Cerrar Sesión</button>
        </div>

      </div>

    </div>
    </>
  )
}
