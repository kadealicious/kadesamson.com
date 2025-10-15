import { required } from "./common";

/**
 * Directions in which a pipe can be connected to another pipe.
 */
export const ConnectionDirection = {
  Left: "left",
  Right: "right",
  Up: "up",
  Down: "down",
};

/**
 * List of every possible tube connection combination.  NOTE that an empty cell is very possible!
 */
export const possibleConnections = [
  ["empty"]
  [ConnectionDirection.Left],
  [ConnectionDirection.Right],
  [ConnectionDirection.Up],
  [ConnectionDirection.Down],
  [ConnectionDirection.Left, ConnectionDirection.Right].sort(),
  [ConnectionDirection.Left, ConnectionDirection.Up].sort(),
  [ConnectionDirection.Left, ConnectionDirection.Down].sort(),
  [ConnectionDirection.Right, ConnectionDirection.Up].sort(),
  [ConnectionDirection.Right, ConnectionDirection.Down].sort(),
  [ConnectionDirection.Up, ConnectionDirection.Down].sort(),
  [ConnectionDirection.Left, ConnectionDirection.Right, ConnectionDirection.Up].sort(),
  [ConnectionDirection.Left, ConnectionDirection.Right, ConnectionDirection.Down].sort(),
  [ConnectionDirection.Left, ConnectionDirection.Up, ConnectionDirection.Down].sort(),
  [ConnectionDirection.Right, ConnectionDirection.Up, ConnectionDirection.Down].sort(),
  [ConnectionDirection.Left, ConnectionDirection.Right, ConnectionDirection.Up, ConnectionDirection.Down].sort(),
].sort();

/**
 * Returns a direction that is not the same-as or opposite the given direction.
 */
export function turnDirection(direction = required("direction")) {
  let opp = oppositeDirection(direction);
  let directions = Object.values(ConnectionDirection).filter(d => (d != opp && d != direction));
  let newDirectionIndex = Math.floor(Math.random() * directions.length);
  let newDirection = directions[newDirectionIndex];
  return newDirection;
}

/**
 * Returns the opposite direction to the provided `ConnectionDirection`.
 */
export function oppositeDirection(direction = required("direction")) {
  let oppositeDirection;
  switch (direction) {
    case ConnectionDirection.Left:
      oppositeDirection = ConnectionDirection.Right;
      break;
    case ConnectionDirection.Right:
      oppositeDirection = ConnectionDirection.Left;
      break;
    case ConnectionDirection.Up:
      oppositeDirection = ConnectionDirection.Down;
      break;
    case ConnectionDirection.Down:
      oppositeDirection = ConnectionDirection.Up;
      break;
  }
  return oppositeDirection;
}

/**
 * Pick the starting direction for a tube, given its current coordinates and the
 * size of the grid.
 *
 * This function will attempt to point towards the center.  If
 * the tube is on the side of the grid, it will have a connection off the end of
 * the grid and will always be perpendicular to the side.  If the tube is in a
 * corner, the starting side will be chosen at random.
 *
 * @param startCoords - The starting coordinates (x, y) of this tube.
 * @param gridSize - The size of the `tubeMap` grid this tube will be placed on.
 *
 * @return - The `ConnectionDirection` for this tube.
 */
export function chooseStartingDirection(startCoords = required("startCoords"), gridSize = required("gridSize")) {
  // Figure out which edges this tube is touching.
  let touchingEdges = [];

  // Check left and right edges.
  if (startCoords[0] == 0) {
    touchingEdges.push(ConnectionDirection.Left);
  } else if (startCoords[0] == gridSize[0] - 1) {
    touchingEdges.push(ConnectionDirection.Right);
  }

  // Check top and bottom edges.
  if (startCoords[1] == 0) {
    touchingEdges.push(ConnectionDirection.Up);
  } else if (startCoords[1] == gridSize[1] - 1) {
    touchingEdges.push(ConnectionDirection.Down);
  }

  console.trace("tube starting at coords ", startCoords, "is touching edges: ", touchingEdges);

  // Determine which edge, if any, we will be "sprouting" our tube out of!
  let startingEdge = undefined;
  if (touchingEdges.length > 1) {
    let startingEdgeIndex = Math.floor(Math.random() * touchingEdges.length);
    startingEdge = touchingEdges[startingEdgeIndex];
  } else if (touchingEdges.length == 1) {
    startingEdge = touchingEdges[0];
  }

  // If starting from an edge, the direction is opposite our tube's connection to the edge.
  let startingDirection = ConnectionDirection.None;
  if (startingEdge != undefined) {
    startingDirection = oppositeDirection(startingEdge);
  } else {
    let directions = Object.values(ConnectionDirection);
    let startingDirectionIndex = Math.floor(Math.random() * directions.length);
    startingDirection = directions[startingDirectionIndex];
  }

  return startingDirection;
}

