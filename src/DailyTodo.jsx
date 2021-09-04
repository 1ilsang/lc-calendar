import React, { useEffect, useState } from "react";
import data from "./data.json";

// TODO:
// async function getAPI(url) {
//   const promiseData = await import(url);
//   console.log(promiseData);
//   return promiseData;
// }

const Todo = (props) => {
  const { id, todo } = props;
  return (
    <div>
      {id}: {todo}
    </div>
  );
};

const DailyTodo = (props) => {
  const { selectedDate } = props;
  const [value, setValue] = useState([]);

  useEffect(() => {
    const pickDate = selectedDate.getDate();
    const { todos } = data[pickDate];
    setValue(todos);
  }, [selectedDate]);

  return (
    <div style={{ backgroundColor: "orange", color: "white" }}>
      {value.map((props) => (
        <Todo key={props.id} {...props} />
      ))}
    </div>
  );
};

export default DailyTodo;
