import { required } from "./common";
import { ConnectionDirection } from "./directions";
import { layerOpts } from "./TubeMap";

/**
 * Create the default set of options for a grid layer within a `tubeMap`.
 *
 * @return - A set of options for a `tubeMap`'s layer.  The options are as follows:
 * `dimensions: number[2]` - How many cells should this grid span in the x and y directions?
 * `startCoords: number[2]` - The x and y coordinates at which to start generating
 *     this layer's tubes.  Different layers may have overlapping tubes, but
 *     no connections between layers shall occur.
 * `tubeTurnProb: number` - Probability that a tube path will turn from 0.0->1.0.
 * `tubeSplitProb: number` - Probability that a tube path will split from 0.0->1.0.
 */
export function gridOpts() {
  return {
    dimensions: [80, 80],
    startCoords: [0, 0],
    tubeTurnProb: 0.4,
    tubeSplitProb: 0.2,
  };
}

/**
 * Returns `true` if a wave function grid has been fully collapsed.
 */
export function isCollapsed(grid = required("grid")) {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y].length > 1) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Given a grid, collapse its possible values.
 */
export function collapsePossibilities(grid = required("grid")) {

}

/**
 * Initialize a wave function grid, where each element is `initialValue`.
 */
export function startWaveFunctionCollapse(initialValue, gridOpts = gridOpts()) {
  let grid = [];
  for (let x = 0; x < gridOpts.dimensions[0]; x++) {
    grid.push([]);
    for (let y = 0; y < gridOpts.dimensions[1]; y++) {
      grid[x].push(initialValue);
    }
  }
  return {
    opts: gridOpts,
    grid: grid,
  };
}
