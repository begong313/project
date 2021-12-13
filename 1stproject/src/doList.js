import { useState } from "react";
import DatePicker from "react-date-picker";

function DoList() {
  const [Todo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);

  const [today, setToday] = useState(new Date());
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <div>
      <h1>
        {year}년 {month}월 {day}일의 기록
      </h1>
      <DatePicker value={today} onChange={setToday} />
      <form>
        <input
          onChange={onChange}
          value={Todo}
          placeholder="입력하시오"
        ></input>
      </form>
    </div>
  );
}

export default DoList;
