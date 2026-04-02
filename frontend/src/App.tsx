import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ChatPage } from './pages/ChatPage';
import { MainLayout } from './layouts/MainLayout';
import { useAppSelector } from './store/hooks';
import { Toaster } from 'react-hot-toast';

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
        />

        {/* Chronione trasy pod MainLayout */}
        <Route element={isAuthenticated ? <MainLayout /> : <Navigate to="/" />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat/:userId" element={<ChatPage />} />
        </Route>

        <Route path="*" element={<div>Strona nie istnieje</div>} />
      </Routes>
    </>
  )
}

export default App
