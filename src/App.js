import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Film from "./components/Film"
import Species from "./components/Species"
import Starship from "./components/Starship";
import Vehicle from "./components/Vehicle";
import Planet from "./components/Planet";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/characters/:id' element={<Character />} />
      <Route path='/films/:id' element={<Film />} />
      <Route path='/species/:id' element={<Species />} />
      <Route path='/starships/:id' element={<Starship />} />
      <Route path='/vehicles/:id' element={<Vehicle />} />
      <Route path='/planets/:id' element={<Planet />} />
    </Routes>
  );
}

export default App;
