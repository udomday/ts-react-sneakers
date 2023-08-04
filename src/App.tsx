import "./scss/app.scss";
import { Account, Favorite, Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
