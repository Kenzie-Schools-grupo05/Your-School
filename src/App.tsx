import React from "react";
import Header from "./components/Header";
import { UserProvider } from "./Providers/UserContext";
import RoutesMain from "./routes/routes";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <UserProvider>
                <RoutesMain />
            </UserProvider>
        </div>
    );
}

export default App;
