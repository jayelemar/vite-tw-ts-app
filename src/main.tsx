import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store/redux/store.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./store/context/modalContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { SideBarContextProvider } from "./store/context/sidebarContext.tsx";

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
  </React.StrictMode>,
);
