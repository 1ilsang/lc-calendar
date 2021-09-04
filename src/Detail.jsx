import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DailyRecord from "./DailyRecord";
import DailyTodo from "./DailyTodo";

const compareDate = (baseDate) => {
  const base = baseDate.getDate();
  const now = new Date().getDate();
  return base === now ? 0 : base < now ? -1 : 1;
};

const Detail = () => {
  const [selectedDate, setDate] = useState(new Date());
  const [isRecordVisible, setRecordVisible] = useState();
  const [isTodoVisible, setTodoVisible] = useState();

  useEffect(() => {
    const compareIndex = compareDate(selectedDate);

    const recordState = compareIndex <= 0;
    const todoState = compareIndex >= 0;

    setRecordVisible(recordState);
    setTodoVisible(todoState);
  }, [selectedDate]);

  return (
    <div>
      Detail
      <p>SelectedDate: {`${selectedDate}`}</p>
      <Calendar onChange={setDate} value={selectedDate} />
      {isRecordVisible && <DailyRecord />}
      {/* {compareIndex <= 0 && <DailyRecord />} */}
      {isTodoVisible && <DailyTodo selectedDate={selectedDate} />}
    </div>
  );
};

export default Detail;
