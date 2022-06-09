import { createContext, useContext, useState } from "react";

export const userContext = createContext({
    user: {},
    addBuyer: () => {}
})

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})

    const addBuyer = (user) => { 
        setUser(user)
    }

    return (
        <userContext.Provider value={{ user,addBuyer }}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider

export const SaveBuyer = () => {
    return useContext(userContext)
}