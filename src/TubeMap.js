import { required } from "./common";
import { ConnectionDirection, chooseStartingDirection, possibleConnections, turnDirection } from "./directions";
import { collapsePossibilities, gridOpts, isCollapsed, startWaveFunctionCollapse } from "./wavefunction";

/**
  * The `<TubeMap>` element displays a visible set of hamster tubes at varying
  * z-indices on the page.
  *
  * @param opts - Options that control this `<TubeMap>`'s construction and display.
  *     These options should be created using the `tubeMapOpts()` function.
  * @return - `<TubeMap>` element which can display tubes over and under and
  *     around its parent container!
  */
export function TubeMap(props) {
  const opts = props.tubeMapOpts;
  console.debug("creating tube map with opts: ", opts);
  let tubeMap = generateTubeMap(opts);

  return (
    <>
    </>
  );
}

/**
  * Create the default set of options for a `<TubeMap>`.
  *
  * @return - A set of options for a `tubeMap` object.  These options are as follows:
  * `dimensions: number[2]` - How many x and y cells should our `tubeMap` have?
  * `layerOpts: layerOpts[]` - Configuration for each layer in this `tubeMap`.
  *     Layers toward the front of the array will appear on top of other layers.
  */
export function tubeMapOpts() {
  return {
    dimensions: [80, 80],
    layerOpts: [gridOpts()],
  };
}

/**
  * Generate a `TubeMap` object which can be interpreted and displayed by the
  * `<TubeMap>` element.
  *
  * @param opts - `tubeMapOpts` object to use for map generation.
  * @return - A `tubeMap` which can be interpreted by the `<TubeMap>` element.
  */
function generateTubeMap(opts = required("opts")) {
  let tubeMap = [];

  // For each layer, perform a wave function collapse!
  for (let i = 0; i < opts.layerOpts.length; i++) {
    let layerOpts = opts.layerOpts[i];
    let layer = startWaveFunctionCollapse(possibleConnections, layerOpts);
    while (!isCollapsed(layer)) {
      layer = collapsePossibilities(layer);
    }
  }

  return tubeMap;
}
