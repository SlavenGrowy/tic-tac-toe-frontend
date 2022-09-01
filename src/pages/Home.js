import React from "react";
import Players from "../components/Players";
import User from "../components/User";
import {Button} from "@mui/material";

function Home() {
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
                    <Players />
                </div>
        </div>
    );
}

export default Home;