import SimpleAPIExamples from "./SimpleAPIExamples";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${process.env.REACT_APP_KANBAS_BACKEND}/a5/welcome`}
          className="list-group-item">
          Welcome
        </a>
      </div>
      <SimpleAPIExamples />
    </div>
  );
}
export default Assignment5;