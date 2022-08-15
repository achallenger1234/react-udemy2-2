import React, { useState } from "react";
// import './App.css';
// import { Practice1 } from './practice/Practice1';
// import { Practice2 } from './practice/Practice2';
// import { Practice3 } from './practice/Practice3';
// import { Practice4 } from './practice/Practice4';



// export default function App() {
//   return (
//     <div className="App">
//       <Practice1 />
//       <Practice2 />
//       <Practice3 />
//       <Practice4 />
//     </div>
//   );
// }

import axios from "axios";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { User } from "./types/user";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "じゃけえ",
  hobbies: ["映画", "ゲーム"],
}

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("//jsonplaceholder.typicode.com/todos")
    .then((res) => {
      setTodos(res.data);
    });
  }
  return (
    <div className="App">
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px"/>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo 
          key={todo.id}
          title={todo.title} 
          userId={todo.userId} 
          completed={todo.completed} 
        />
      ))}
    </div>
  );
}