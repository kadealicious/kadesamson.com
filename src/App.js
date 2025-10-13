import TubeMap from "./TubeMap.js";
import CritterSpawner from "./Critters.js";

function App() {
  return (
    <div className="app">
      <h1>welcome to tube city!</h1>
      <TubeMap>
        <CritterSpawner />
      </TubeMap>
    </div >
  );
}

export default App;
