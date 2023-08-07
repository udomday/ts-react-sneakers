import "./scss/app.scss";
import { Account, Favorite, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { AppRouter, Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
