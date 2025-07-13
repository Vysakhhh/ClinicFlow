import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CalendarPage from './pages/CalendarPage';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext); 

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: { zIndex: 99999 }
        }} />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/calendar' element={user ? <CalendarPage /> : <Navigate to='/' replace />} />
      </Routes>
    </>
  );
}

export default App;
