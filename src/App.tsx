import React from "react";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/globalStyles";

import  {GradeStudent} from  "./components/GradeStudent"

import { DashboardParent } from "./pages/DashboardParent";
function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header />
            <GradeStudent/>
        </div>
    );
}

export default App;
