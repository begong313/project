import { useState } from "react";
import React from "react";
import "./diary.css";

function Diary() {
  //일기 배열
  const [diarys, setDiarys] = useState([]);
  //일기입력창
  const [diary, setDiary] = useState("");
  const onchange = (event) => setDiary(event.target.value);
  //날짜 설정
  const [today, setToday] = useState(new Date());
  const year = today != null ? today.getFullYear() : "";
  const month = today != null ? today.getMonth() + 1 : "";
  const day = today != null ? today.getDate() : "";
  //입력버튼 클릭
  const onclick = (event) => {
    event.preventDefault();
    const yymmdd = `${year}년 ${month}월 ${day}일`;
    setDiarys((currentArray) => [{ diary, yymmdd }, ...currentArray]);
    setDiary("");
  };
  return (
    <div>
      <h2>일기</h2>
      <hr />
      <form>
        <textarea
          className="diaryinput"
          placeholder="오늘은 무슨일이 있었나요?"
          onChange={onchange}
          value={diary}
        ></textarea>
        <button className="diarybtn" onClick={onclick}>
          입력
        </button>
        <button className="diarybtn">초기화</button>
      </form>
    </div>
  );
}

export default Diary;

//내일할일 : 일기 저장 구현, 일기 날짜별 조회
