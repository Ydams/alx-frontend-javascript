// Write a function named guardrail that will accept one argument mathFunction (Function).

// This function should create and return an array named queue.

export default function guardrail(mathFunction) {
  const array = [];

  try {
    array.push(mathFunction());
  } catch (err) {
    array.push(err.toString());
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}
