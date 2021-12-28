import { deleteDoc, doc } from "firebase/firestore";
import { storageService } from "../fbase";

const TodoCplt = ({ CptObj }) => {
  const todoTextRef = doc(storageService, "CptTodos", `${CptObj.id}`);
  //삭제버튼
  const onDltClk = async () => {
    const ok = window.confirm("삭제하시겠습니까");
    if (ok) {
      await deleteDoc(todoTextRef);
    }
  };

  const datedis = (string) => {
    return `${string.substring(0, 4)}년 ${string.substring(
      4,
      6
    )}월 ${string.substring(6, 8)}일`;
  };
  return (
    <div className="todoBox">
      <div className="todotext">{CptObj.text}</div>
      <div className="cpltdate">
        시작일 : {datedis(CptObj.createAt)} <br></br>
        완료일 : {datedis(CptObj.cptAt)}
        <button onClick={onDltClk}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCplt;
