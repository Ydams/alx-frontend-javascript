//Rest parameter syntax for functions

export default function returnHowManyArguments(...Kwargs) {
  return Kwargs.length;
}
