import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./utils/redux/store.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./utils/context/modalContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { SideBarContextProvider } from "./utils/context/sidebarContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter>
                    <ModalContextProvider>
                        <SideBarContextProvider>
                            <App />
                        </SideBarContextProvider>
                    </ModalContextProvider>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
