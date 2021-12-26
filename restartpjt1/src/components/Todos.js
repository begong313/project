import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { storageService } from "../fbase";

const TodosDis = ({ todosObj }) => {
  //삭제버튼
  const todoTextRef = doc(storageService, "todos", `${todosObj.id}`);

  const onDltClk = async () => {
    const ok = window.confirm("삭제하시겠습니까");
    if (ok) {
      await deleteDoc(todoTextRef);
    }
  };
  const onCptClk = async () => {
    const ok = window.confirm("완료하셨습니까");
    if (ok) {
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
      <h4>{todosObj.text}</h4>
      <h4>{datedis(todosObj.createAt)}</h4>
      <button onClick={onDltClk}>Delete</button>
      <button>complete</button>
    </div>
  );
};

export default TodosDis;
