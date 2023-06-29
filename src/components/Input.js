import React, { useState } from "react";
import "./Input.css";

function Input({ dodajZadatak }) {
  const [zadatak, setZadatak] = useState("");

  function zadatakHandler(e) {
    setZadatak(e.target.value);
  }

  function submitHandler(e) {
    setZadatak("");
    e.preventDefault();
    dodajZadatak({ tekst: zadatak, id: crypto.randomUUID(), checked: false });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="please add task"
          className="input__field"
          value={zadatak}
          onChange={zadatakHandler}
        ></input>
        <button>Dodaj zadatak</button>
      </form>
    </div>
  );
}

export default Input;
