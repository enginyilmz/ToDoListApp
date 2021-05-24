import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import FirstPart from "./components/FirstPart/FirstPart";
import SecondPart from "./components/SecondPart/SecondPart";

import Footer from "./components/Footer/Footer"

const INITIAL_STATE = [
  { id: 0, title: "Plan the family trip to Dublin", done: false },
  { id: 1, title: "Groceries for dinner", done: false },
  { id: 2, title: "Plan Nehir's birthday event", done: true }
]

function App() {
  const [toDoLists, setToDoLists] = useState(INITIAL_STATE);
  return (
    <div className="container">
      <FirstPart toDoLists={toDoLists} setToDoLists={setToDoLists}/>
      <SecondPart toDoLists={toDoLists} setToDoLists={setToDoLists} />
      <Footer/>
    </div>
  );
}

export default App;
