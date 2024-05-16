import React from "react";
import Header from "./components/Header";
import { Todolistdata } from "../atom/atom";
import { useRecoilValue } from "recoil";
import { TodoWrapper } from "./Todolist/TodoWrapper";
import WeatherWidget from "./Weather/WeatherWidget";

function Dashboard() {
  const todo = useRecoilValue(Todolistdata);
  return (
    <div>
      <Header />
     
      {todo ? <TodoWrapper/> :<WeatherWidget/>}
    </div>
  );
}

export default Dashboard;
