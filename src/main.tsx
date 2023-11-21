import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
<<<<<<< Updated upstream

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
=======
import { ModalContextProvider } from "./utils/context/modalContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter>
                    <ModalContextProvider>
                        <App />
                    </ModalContextProvider>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
>>>>>>> Stashed changes
    </React.StrictMode>
);
