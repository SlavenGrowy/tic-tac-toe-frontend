import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Game from "./pages/Game";

function App() {
  return (
      <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/game">Game</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
        </Routes>
        </>
  );
}

export default App;
