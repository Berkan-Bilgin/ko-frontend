import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./components/Layout.jsx";
import Modal from "react-modal";

const queryClient = new QueryClient();
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
