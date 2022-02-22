import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./hooks";
import SignIn from "./pages/SignIn";
import { AppRoutes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
