import { useState } from "react";
export default function Urlap(props) {
  //let obj = {}; helyette state
  const [obj, setObj] = useState({ nev: "", szul: 2022 });

  function kuld(event) {
    event.preventDefault();
    console.log(obj);
    props.kuld(obj)
  }
  function adatValt(event) {
    const masolat = { ...obj };
    masolat[event.target.id] = event.target.value;
    setObj(masolat);
  }
  return (
    <>
      <h2>Új adat rögzítése</h2>
      <form onSubmit={kuld}>
        <div>
          <label htmlFor="nev">Név: </label>
          <input
            type="text"
            onChange={adatValt}
            id="nev"
            value={obj.nev}
            placeholder="Vezetéknév Keresztnév"
            name="nev"
          ></input>
          <label htmlFor="szul">Születési év: </label>
          <input
            type="number"
            onChange={adatValt}
            id="szul"
            value={obj.szul}
            min="2000"
            max="2024"
            placeholder="2022"
            name="szul"
          ></input>
        </div>
        <input variant="success" type="submit" id="submit" value="OK" />
      </form>
    </>
  );
}
