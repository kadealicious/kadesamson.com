/**
  * The `<TubeMap>` element displays a visible set of hamster tubes at varying
  * z-indices on the page.
  *
  * @param tubeMapOpts - Options that control this `<TubeMap>`, created by the
  * `tubeMapOpts()` function.
  * @return - `<TubeMap>` element which can display tubes over and under and
  * around its parent container!
  */
function TubeMap(tubeMapOpts = tubeMapOpts()) {
  console.log("creating tube map with opts: " + tubeMapOpts);
  let tubeMap = generateTubeMap(tubeMapOpts);

  return (
    <>
    </>
  );
}

/**
 * Directions in which a pipe can be connected to another pipe.
 */
const ConnectionDirections = {
  None: "none",
  Left: "left",
  Right: "right",
  Up: "up",
  Down: "down",
};

/**
  * Generate a `TubeMap` object which can be interpreted and displayed by the
  * `<TubeMap>` element.
  *
  * @param rows - The number of rows in each map layer.
  * @param cols - The number of columns in each map layer.
  * @param layerStartCoords - The coordinates at which to start generating each
  *     layer's tubes.  Each starting coordinate provided will begin a tube
  *     network layer "behind" the previous coordinate in the array.  The layers
  *     may have overlapping tubes, but no connections between layers shall occur.
  * @return - A `tubeMap` which can be interpreted by the `<TubeMap>` element.
  */
function generateTubeMap(rows = 80, cols = 80, layerStartCoords = [[0, 0]]) {
  let grids = [[]];
  for (let startingCoord of layerStartCoords) {
    let isLayerFinished = false;
    while (!isLayerFinished) {
      console.log("gay234" + startingCoord);
      isLayerFinished = true;
    }
  }
}

/**
  * Create the default set of options for a <TubeMap>.  Fields can be modified
  * by the user once this function has returned its default option set.
  *
  * @return - A set of options for a `tubeMap` object.  These options are as follows:
  * `rows: number` - How many rows should our `tubeMap` have?
  * `cols: number` - How many columns should our `tubeMap` have?
  * `border: bool` - Should we display a tube border around the `<TubeMap>` container?
  */
function tubeMapOpts() {
  return {
    rows: 80,
    cols: 80,
    border: true,
  };
}

export default { TubeMap, tubeMapOpts };
