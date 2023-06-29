import { useState, createContext } from "react";
import "./App.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Zadatak from "./components/Zadatak";

export const toDo = createContext("");

function App() {
  const [zadatak, setZadatak] = useState([
    { id: crypto.randomUUID(), tekst: "prvi zadatak", checked: false },
    { id: crypto.randomUUID(), tekst: "drugi zadatak", checked: false },
  ]);

  const [all, setAll] = useState(true);
  const [activated, setActivated] = useState(false);
  const [completed, setCompleted] = useState(false);

  const dodajZadatak = function (zadatak) {
    setZadatak((trenutniZadaci) => [...trenutniZadaci, zadatak]);
  };

  const completeZadatak = function (index) {
    const zadaciArray = [...zadatak];

    zadaciArray[index].checked = !zadaciArray[index].checked;

    setZadatak(zadaciArray);
  };

  const deleteZadatak = function (id) {
    const filteredZadatak = zadatak.filter((zad) => zad.id !== id);
    console.log(filteredZadatak);
    setZadatak(filteredZadatak);
  };

  return (
    <div className="App">
      <toDo.Provider
        value={{
          all,
          setAll,
          activated,
          setActivated,
          completed,
          setCompleted,
        }}
      >
        <Input dodajZadatak={dodajZadatak} />
        <Buttons />
        <Zadatak
          deleteZadatak={deleteZadatak}
          completeZadatak={completeZadatak}
          zadatak={zadatak}
        />
      </toDo.Provider>
    </div>
  );
}

export default App;
