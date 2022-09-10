import React from "react";
import Players from "../components/Players";
import User from "../components/User";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import FormDialog from "./Dialog";

function Home() {
    const navigate = useNavigate()

    return (
        <div className="App">
                <header>
                    <h1>Tic-Tac-Toe</h1>
                    <div className="user">
                        <User />
                        <FormDialog />
                        <Button variant="contained" onClick={ () => {navigate("/game")} }>Navigate to Game Screen</Button>
                    </div>
                </header>
                <div className="content">
                    <Players />
                </div>
        </div>
    );
}

export default Home;