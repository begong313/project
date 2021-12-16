import { useState } from "react";
import DatePicker from "react-date-picker";
import "./doList.css";
import React from "react";
import Diary from "./diary";

function DoList() {
  //해야될일 배열
  const [dolist, setdolist] = useState([]);
  //완료한일 배열
  const [cpltList, setCpltList] = useState([]);
  //일기배열

  //날짜 설정
  const [today, setToday] = useState(new Date());
  const year = today != null ? today.getFullYear() : "";
  const month = today != null ? today.getMonth() + 1 : "";
  const day = today != null ? today.getDate() : "";

  // 입력창 동작
  const [Todo, setToDo] = useState("");
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
  const dolistDlt = (event) => {
    dolist.splice(event.target.className, 1);
    refresh();
  };

  //cplt 삭제
  const cpltDlt = (event) => {
    cpltList.splice(event.target.className, 1);
    refresh();
  };

  //완료버튼 기능
  const cpltClick = (event) => {
    const cplt = dolist[event.target.className];
    cplt.cyymmdd = `${year}년 ${month}월 ${day}일`;
    setCpltList((currentArray) => [cplt, ...currentArray]);
    dolistDlt(event);
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

      <div className="dolist">
        <h2>DoList</h2>
        <hr />
        <form onSubmit={onSubmit} className="doform">
          <DatePicker
            value={today}
            onChange={setToday}
            className="datepicker"
          />
          <input
            className="doinput"
            onChange={onChange}
            value={Todo}
            placeholder="입력하시오"
          />
          <button className="doinput">Add To Do</button>
        </form>
        <ul>
          <h3>해야될일</h3>
          <hr />
          {dolist.map((item, index) => (
            <li key={index}>
              {item.Todo}{" "}
              <a className="date">
                등록일 : {item.yymmdd}
                <button onClick={cpltClick} className={index}>
                  ✓
                </button>
                <button onClick={dolistDlt} className={index}>
                  X
                </button>
              </a>
            </li>
          ))}
          <h3>완료한일</h3>
          <hr />
          {cpltList.map((item, index) => (
            <li key={index}>
              {item.Todo}
              <a className="date">
                등록일 : {item.yymmdd}{" "}
                <b className="cpltdate">완료일 : {item.cyymmdd}</b>
                <button onClick={cpltDlt} className={index}>
                  X
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="diary">
        <Diary />
      </div>
    </div>
  );
}

export default DoList;
