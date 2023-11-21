import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./utils/redux/store.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./utils/context/modalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ModalContextProvider>
                    <App />
                </ModalContextProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
