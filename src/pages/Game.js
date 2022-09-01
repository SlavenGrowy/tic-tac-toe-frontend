import User from "../components/User";
import {Button} from "@mui/material";
import React from "react";

function Game() {
    return (
        <div className="App">
            <header>
                <h1>Tic-Tac-Toe</h1>
                <div className="user">
                    <User />
                    <Button variant="contained" size="small">
                        Change</Button>
                </div>
            </header>
            <div className="content">
                <p>Game Screen</p>
            </div>
        </div>
    )
}

export default Game;