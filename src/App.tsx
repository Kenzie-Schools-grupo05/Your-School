import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

import  {GradeStudent} from  "./components/GradeStudent"

import { DashboardParent } from "./pages/DashboardParent";
import { Dashboard } from "./pages/Dashboard";
function App() {
    return (
        <div className="App">
            <GlobalStyle />

            {/* <AppRoutes/> */}
            {/* <GradeStudent disabled={false}/> */}
            <Dashboard />
        </div>
    );
}

export default App;
