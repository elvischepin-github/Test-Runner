import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Test Runner_</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/exercise_1_1">Exercise 1</Link>
      </div>
    </>
  );
}
