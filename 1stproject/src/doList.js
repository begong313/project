import { useState } from "react";
import DatePicker from "react-date-picker";
import "./doList.css";
import React from "react";

function DoList() {
  const [Todo, setToDo] = useState("");

  //날짜 설정
  const [today, setToday] = useState(new Date());
  const year = today != null ? today.getFullYear() : "";
  const month = today != null ? today.getMonth() + 1 : "";
  const day = today != null ? today.getDate() : "";

  // 입력창
  const [dolist, setdolist] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  //제출버튼
  const onSubmit = (event) => {
    event.preventDefault();
    const yymmdd = `${year}년 ${month}월 ${day}일`;
    if (Todo === "") {
      return;
    }
    setdolist((currentArray) => [{ Todo, yymmdd }, ...currentArray]);
    setToDo("");
  };

  //삭제버튼 기능
  const onClick = (event) => {
    console.log(event.target.id);
    dolist.splice(event.target.id, 1);
    refresh();
  };

  //화면 갱신할때
  const [value, setValue] = useState();
  const refresh = () => {
    setValue({});
  };

  return (
    <div>
      <h1>
        {year}년 {month}월 {day}일의 기록
      </h1>
      <DatePicker value={today} onChange={setToday} />
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={Todo} placeholder="입력하시오" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {dolist.map((item, index) => (
          <li key={index}>
            {item.Todo}{" "}
            <a className="date">
              {item.yymmdd}
              <button onClick={onClick} id={index}>
                X
              </button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoList;


// 내일 해볼것 1.날자별 조회기능 만들기