import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import {CalendarProvider} from './context/CalendarContext.jsx';
import  {AuthProvider}  from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> 
        <CalendarProvider>
          <App />
        </CalendarProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
