

import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./Reducer";

const INTITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user'))  || null,
    isFetching: false,
    error: false,
    getPost: false
};

export  const AuthContext = createContext(INTITIAL_STATE);

export const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, INTITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])
    
    return (
        <AuthContext.Provider 
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
