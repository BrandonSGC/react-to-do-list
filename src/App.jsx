import { useEffect, useState } from "react";
import { ToDo } from "./components/ToDo";

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  function getInputValue(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (inputValue.trim().length < 1) return;

    setToDos([...toDos, inputValue.trim()]);

    setInputValue('');
  }

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>

        <h1 className="heading">Things to do</h1>

        <textarea
          className="form__input"
          cols="30"
          rows="3"
          onChange={getInputValue}
          placeholder="Add your New To Do!"
          value={inputValue}
        ></textarea>

        <button 
          className="form__button" 
          type="Submit">
          Create To Do
        </button>

        {toDos.map((toDo, index) => {
          return <ToDo key={index} description={toDo} />;
        })}
      </form>
    </div>
  );
}
