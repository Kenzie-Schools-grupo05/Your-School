import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <AppRoutes />
      <ToastContainer
        autoClose={2000}
        position="top-right"
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default App;
