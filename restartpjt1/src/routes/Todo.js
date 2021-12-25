import { addDoc, collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { storageService } from "../fbase";

const TODO = () => {
  const [todos, setTodos] = useState([]);

  //todo 가져오기 (공부해야됨.)
  const getTodos = async () => {
    const q = query(collection(storageService, "todos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const todolist = {
        ...doc.data(),
        date: doc.createAt,
      };
      setTodos((prev) => [todolist, ...prev]);
    });
  };
  useEffect(() => {
    getTodos();
  }, []);

  //입력창 동작
  const [Todo, setToDo] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setToDo(value);
  };

  //todo 전송
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(storageService, "todos"), {
      Todo,
      createAt: Date.now(),
    });
  };

  return (
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
      <div>
        {todos.map((todo) => (
          <div>
            <h4>{todo.Todo}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TODO;
