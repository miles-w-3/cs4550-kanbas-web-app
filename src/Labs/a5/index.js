import SimpleAPIExamples from "./SimpleAPIExamples";
import Har from "./q16";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <Har />
      <div className="list-group">
        <a href={`${process.env.KANBAS_URL}/a5/welcome`}
          className="list-group-item">
          Welcome
        </a>
      </div>
      <SimpleAPIExamples />
    </div>
  );
}
export default Assignment5;