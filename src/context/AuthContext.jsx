import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [username , setUsername] = useState(null);

    function Login (name){
        setUsername(name)
    }

    function LogOut(){
        setUsername(null)
    }

    return(
        <AuthContext.Provider value={{username , Login , LogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);