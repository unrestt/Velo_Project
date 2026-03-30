import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { useAppSelector } from './store/hooks';
import { Toaster } from 'react-hot-toast';

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        {/* Jeśli użytkownik jest zalogowany i wejdzie na "/", przekieruj go na dashboard */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
        />

        {/* Jeśli użytkownik NIE jest zalogowany, a wejdzie na "/dashboard", wyrzuć go do logowania */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />}
        />

        {/* Opcjonalnie: strona 404 */}
        <Route path="*" element={<div>Strona nie istnieje</div>} />
      </Routes>
    </>

  )
}

export default App
