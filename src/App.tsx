import './scss/app.scss';
import { Favorite, Home } from './pages';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
