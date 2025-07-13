import React, { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  const addAppointment = (newApp) => {
    setAppointments((prev) => [...prev, newApp]);
  };

  const updateAppointment = (updatedApp) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === updatedApp.id ? updatedApp : app))
    );
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <CalendarContext.Provider

      value={{ appointments, setAppointments, selectedDate, setSelectedDate, editingAppointment, setEditingAppointment, showForm, setShowForm, currentMonth, setCurrentMonth, addAppointment, updateAppointment, deleteAppointment  }} >
      {children}
      
    </CalendarContext.Provider>
  );
};

