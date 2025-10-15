/**
 * Throw an error with this argument's name if it is not specified to a function.
 *
 * ```
 * function myfunc(reqArg = required("reqArg")) {
 *   console.log("This will not print if reqArg is not specified :)")
 * }
 * ```
 */
export const required = (argName) => {
  throw new Error(`${argName} is a required argument`);
};
