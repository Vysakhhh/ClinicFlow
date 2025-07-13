import React from "react";
import { addMonths, subMonths, startOfWeek, addDays } from "date-fns";
import MonthGrid from "./MonthGrid";
import { useCalendarContext } from "../context/useCalendarContext";

const Calendar = () => {
  const { currentMonth, setCurrentMonth } = useCalendarContext();

  const renderHeader = () => {
    if (!currentMonth) return null;

    return (
      <div className="flex justify-between items-center py-4 px-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <i className="fa-solid fa-angle-left fa-lg hover:scale-130 cursor-pointer"></i>
        </button>
        <h2 className="text-2xl font-semibold">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <i className="fa-solid fa-angle-right fa-lg hover:scale-130 cursor-pointer"></i>
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      const date = addDays(startDate, i);
      days.push(

        <div key={i} className="text-center font-semibold hover:scale-125 hover:text-indigo-600" >
          {date.toLocaleDateString("en-US", { weekday: "short" })}
        </div>
        
      );
    }

    return <div className="p-2 grid grid-cols-7">{days}</div>;
  };

  return (
    <div className="px-5 py-5 bg-amber-200 rounded-xl shadow-md">
      {renderHeader()}
      {renderDays()}
      <MonthGrid />
    </div>
  );
};

export default Calendar;

