import { createContext, useReducer, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../../utils/Firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser:payload
            }
                
        default:
            throw new Error("err");
    }

}


export const UserProvider = ({ children }) => {
    const [{currentUser},dispatch]=useReducer(userReducer,INITIAL_STATE);

    const setCurrentUser = (user)=>dispatch({type:"SET_CURRENT_USER",payload:user});

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListner((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])

    const value = { currentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}