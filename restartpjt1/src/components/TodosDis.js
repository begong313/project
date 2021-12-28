import { deleteDoc, doc, setDoc } from "firebase/firestore";
import React from "react";
import { storageService } from "../fbase";

const TodosDis = ({ todosObj, date }) => {
  //obj선택
  const todoTextRef = doc(storageService, "todos", `${todosObj.id}`);
  //삭제버튼
  const onDltClk = async () => {
    const ok = window.confirm("삭제하시겠습니까");
    if (ok) {
      await deleteDoc(todoTextRef);
    }
  };
  //완료버튼(삭제 및 이동)
  const onCptClk = async () => {
    const ok = window.confirm("완료하셨습니까");
    if (ok) {
      await setDoc(doc(storageService, "CptTodos", todosObj.id), {
        ...todosObj,
        cptAt: date(),
      });
      deleteDoc(todoTextRef);
    }
  };
  //날짜형식변환
  const datedis = (string) => {
    return `${string.substring(0, 4)}년 ${string.substring(
      4,
      6
    )}월 ${string.substring(6, 8)}일`;
  };

  return (
    <div className="todoBox">
      <div className="todotext">{todosObj.text}</div>
      <div className="tododate">
        {datedis(todosObj.createAt)}
        <button onClick={onDltClk}>Delete</button>
        <button onClick={onCptClk}>complete</button>
      </div>
    </div>
  );
};

export default TodosDis;
