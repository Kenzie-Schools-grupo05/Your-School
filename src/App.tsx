import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

import  {GradeStudent} from  "./components/GradeStudent"

import { DashboardParent } from "./pages/DashboardParent";
function App() {
    return (
        <div className="App">
            <GlobalStyle />

            <AppRoutes/>
            <GradeStudent disabled={false}/>
        </div>
    );
}

export default App;
