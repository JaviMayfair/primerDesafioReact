import { Children, createContext, useState } from "react"

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState("")
    const [email, setEmail] = useState("")
    const [perfil, setPerfil] = useState()

    const profile = async () => {
        const response = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await response.json();
        setPerfil(data)
        
    }


    const login = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        console.log(data);
        setToken(data.token)
        setEmail(data.email)


    }

    const register = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        console.log(data);
        setToken(data.token)
        setEmail(data.email)
    }

    const logout = () => {
        setToken("")
        setEmail("")

    }


    return (
        <UserContext.Provider value={{ token, setToken, logout, login, register, email }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider