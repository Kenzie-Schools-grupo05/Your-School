import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyle />

            <AppRoutes/>
        </div>
    );
}

export default App;
