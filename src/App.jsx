import { useState } from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemChange = (e) => {
    setInputList(e.target.value);
  };

  const btnClicked = () => {
    if (inputList.trim() !== "") { // Check if inputList is not empty or whitespace
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };
  const DeleteItem = (id)=>{
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index)=>{
      return index!== id
      })
    });
}
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add an Item" value={inputList} onChange={itemChange} />
          <button className="button" onClick={btnClicked}>
            +
          </button>
          <ol>
            {items.map((itemval , index) => {
              return <ToDoLists key = {index} id = {index} OnDelete = {DeleteItem} text = {itemval}/>
})}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
