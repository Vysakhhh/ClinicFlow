import React from "react";
import {startOfMonth, endOfMonth, eachDayOfInterval, getDay} from "date-fns";
import DayCell from "./DayCell";
import { useCalendarContext } from "../context/useCalendarContext";


const MonthGrid = () => {
  const { currentMonth, setSelectedDate, setShowForm } = useCalendarContext();

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  const startOffset = getDay(start); 

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setShowForm(true);
  };

  return (
    <div className="grid grid-cols-7 gap-1 py-3">
      {Array(startOffset)
        .fill(null)
        .map((_, i) => (
          <div key={`empty-${i}`} className="h-20 bg-transparent" />
        ))}

      {days.map((day) => (
        <DayCell
          key={day}
          date={day}
          onClick={() => handleDateClick(day)}
        />
      ))}
    </div>
  );
};

export default MonthGrid;

