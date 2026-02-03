import "./App.css";
import Home from "./pages/Home";
import { Exercise_1_1, Exercise_1_2 } from "@part-1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/Test-Runner/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise_1_1" element={<Exercise_1_1 />} />
        <Route path="/exercise_1_2" element={<Exercise_1_2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
