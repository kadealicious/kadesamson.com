import { TubeMap, tubeMapOpts } from "./TubeMap.js";
import { CritterSpawner } from "./Critters.js";

function App() {

  let tubeCityOpts = tubeMapOpts();
  tubeCityOpts.layerOpts[0].startCoords = [40, 40];

  return (
    <div className="app">
      <h1>welcome to tube city!</h1>
      <TubeMap tubeMapOpts={tubeCityOpts}>
        <CritterSpawner />
      </TubeMap>
    </div >
  );
}

export default App;
