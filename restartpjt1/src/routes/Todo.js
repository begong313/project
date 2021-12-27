import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import TodoCplt from "../components/TodoCplt";
import TodosDis from "../components/TodosDis";
import { storageService } from "../fbase";

const TODO = () => {
  const [todos, setTodos] = useState([]);

  // 자동 todo 가져오기
  useEffect(() => {
    const q = query(
      collection(storageService, "todos"),
      orderBy("order", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const todoArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        day: doc.creatAt,
      }));
      setTodos(todoArray);
    });
  }, []);

  //입력창 동작
  const [Todo, setToDo] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setToDo(value);
  };

  const timevalue = () => Date.now().toString();
  //todo 전송
  const onSubmit = async (event) => {
    event.preventDefault();
    await setDoc(doc(storageService, "todos", timevalue()), {
      text: Todo,
      createAt: setdate(),
      order: Date.now(),
    });
    setToDo("");
  };

  //날짜세팅
  const setdate = () => {
    const todate = new Date();
    const year = todate.getFullYear();
    const month = todate.getMonth() + 1;
    const day = todate.getDate();
    const yymmdd = `${year}${month}${day}`.toString();
    return yymmdd;
  };

  return (
    <div>
      <div>
        <h1>TODO</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="doinput"
            placeholder="입력하시오"
            onChange={onChange}
            value={Todo}
          />
          <input type="submit" value="추가" />
        </form>
      </div>
      <hr></hr>
      <div>
        {todos.map((todo) => (
          <TodosDis key={todo.id} todosObj={todo} />
        ))}
      </div>
      <div>
        <h1>Complete</h1>
        <hr></hr>
        <TodoCplt />
      </div>
    </div>
  );
};

export default TODO;
