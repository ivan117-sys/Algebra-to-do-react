import "./Zadatak.css";
import { toDo } from "../App";
import { useContext } from "react";

function Zadatak({ zadatak, completeZadatak, deleteZadatak }) {
  const context = useContext(toDo);
 

  const active = zadatak.filter((zad) => zad.checked === false);

  const complete = zadatak.filter((zad) => zad.checked === true);

  return (
    <div>
      <div></div>
      <ul>
        {context.completed &&
          !context.all &&
          complete.map((zad) => (
            <div key={zad.id} className="zadatak__container">
              <li className={zad.checked ? "crossed" : "notCrossed"}>
                {zad.tekst}
              </li>
            </div>
          ))}
        {context.activated &&
          active.map((zad) => (
            <div key={zad.id} className="zadatak__container">
              <li className={zad.checked ? "crossed" : "notCrossed"}>
                {zad.tekst}
              </li>
            </div>
          ))}
        {!context.activated &&
          context.all &&
          zadatak.map((zad, index) => (
            <div key={zad.id} className="zadatak__container">
              <input
                key={index}
                onClick={() => completeZadatak(index)}
                type="checkbox"
              ></input>
              {""}
              <li className={zad.checked ? "crossed" : "notCrossed"}>
                {zad.tekst}
              </li>
              <button
                value={zad.id}
                onClick={(e) => {
                  deleteZadatak(e.target.value);
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Zadatak;
