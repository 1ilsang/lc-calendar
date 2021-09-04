import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DailyRecord from "./DailyRecord";
import DailyTodo from "./DailyTodo";

const Detail = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      Detail
      <p>{`${value}`}</p>
      <Calendar onChange={onChange} value={value} />
      <DailyRecord />
      <DailyTodo />
    </div>
  );
};

export default Detail;
