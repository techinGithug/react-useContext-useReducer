import React, { useState, useEffect } from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
} from "react-router-dom";
import HomePage from "./components/HomePage";
import FeedPage from "./components/FeedPage";
import AppState from "./context/AppState";

function App() {
    return (
        <div className="">
            <h1>Context Example</h1>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/feed">Feed</Link>
                        </li>
                    </ul>
                </nav>
                <AppState>
                    <Switch>
                        <Route exact path="/home" component={HomePage} />
                        <Route path="/feed" component={FeedPage} />
                    </Switch>
                </AppState>
            </Router>
        </div>
    )
}

export default App