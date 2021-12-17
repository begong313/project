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
  const etrclick = (event) => {
    event.preventDefault();
    const yymmdd = `${year}년 ${month}월 ${day}일`;
    setDiarys((currentArray) => [{ diary, yymmdd }, ...currentArray]);
    setDiary("");
  };

  //초기화버튼 클릭
  const resetclick = (event) => {
    event.preventDefault();
    setDiary("");
  };

  //화면 갱신할때
  const [value, setValue] = useState();
  const refresh = () => {
    setValue({});
  };
  //일기삭제
  const diarydlt = (event) => {
    diarys.splice(event.target.className, 1);
    refresh();
  };

  //일기수정
  const editbtn = (event) => {
    setDiary(diarys[event.target.className].diary);
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
        />
        <button className="diarybtn" onClick={resetclick}>
          초기화
        </button>
        <button className="diarybtn" onClick={etrclick}>
          입력
        </button>
      </form>
      {diarys.map((item, index) => (
        <div key={index}>
          <h4>
            {item.yymmdd} 일기{" "}
            <button className={index} onClick={editbtn}>
              수정
            </button>
            <button onClick={diarydlt} className={index}>
              삭제
            </button>
          </h4>
          {item.diary}
        </div>
      ))}
    </div>
  );
}

export default Diary;

//내일할일 : 일기 저장 구현, 일기 날짜별 조회
