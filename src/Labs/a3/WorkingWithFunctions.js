import ArrowFunctions from "./ArrowFunctions";
import ES5Functions from "./ES5Functions";

export default function WorkingWithFunctions() {
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  const square = a => a * a;
  const plusOne = a => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <>
      <ArrowFunctions/>
      <ES5Functions/>
      <h3>Implied return</h3>
      <>fourTimesFive = {fourTimesFive}</><br />
      <>multiply(4, 5) = {multiply(4, 5)}</>
      <h3>Parenthesis and parameters</h3>
      <>twoSquared = {twoSquared}</><br />
      <>square(2) = {square(2)}</><br />
      <>threePlusOne = {threePlusOne}</><br />
      <>plusOne(3) = {plusOne(3)}</>
    </>
  );
}