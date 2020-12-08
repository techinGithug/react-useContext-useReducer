import React, { useState } from "react";
import AppContext from "./app-context";

const AppState = (props) => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AppContext.Provider value={{
            isAuth,
            setIsAuth,
            message: "This from context"
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
