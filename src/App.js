import Urlap from "./component/Urlap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  function kuld(urlapAdat) {
    console.log(urlapAdat);
    //itt megkaptam az adatokat és innen küldöm az adatokat az adatbázisba
  }
  return (
    <div className="App">
      <header className="App-header">
        <article className="Urlap">
          <Urlap kuld={kuld} />
        </article>
      </header>
    </div>
  );
}

export default App;
