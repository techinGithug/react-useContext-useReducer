import React, { useContext } from "react";
import AppContext from "../context/app-context";

const FeedPage = () => {
    const { message } = useContext(AppContext)
    return (
        <div>
            <h2>This is feedpage...</h2>
            <p>{message}</p>
        </div>
    )
}

export default FeedPage