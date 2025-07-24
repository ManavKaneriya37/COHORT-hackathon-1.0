import "./App.css";
import AppRoutes from "./screens/AppRoutes.jsx";
import { ToastContainer, toast } from "react-toastify";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <ToastContainer position="bottom-left" />
        <Provider store={store}>
          <AppRoutes />
        </Provider>
    </>
  );
}

export default App;
