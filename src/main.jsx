import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider as ChakraUIProvider } from "./components/ui/provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraUIProvider>
          <App />
        </ChakraUIProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
