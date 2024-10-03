import {useContext} from 'react'
import { UserContext } from '../context/UserContext'

export default function MyProfile() {
  const {email, logout} = useContext(UserContext)



  return (

    <>
    <h1>Mi Perfil 🧙‍♀️</h1>
    <div style={{ display: "flex", justifyContent: "center",}}>
      
      <div style={{ margin: "25px", border: "solid 3px", width: "600px", textAlign: "center", backgroundColor: "#ffe28c" }}>
        <div>
          <img style={{ width: "150px", border: "solid 1px", margin: "10px" }} src="https://static.vecteezy.com/system/resources/previews/015/934/773/non_2x/woman-icon-for-user-profile-female-icon-human-or-people-sign-and-symbol-vector.jpg" alt="" />
        </div>

        <div style={{ padding: "20px" }}>
          <h3><strong>Bienvenid@: </strong>{email}</h3>
          <button onClick={logout} style={{ border: "solid 1px", margin: "10px" }}>Cerrar Sesión</button>
        </div>

      </div>

    </div>
    </>
  )
}
