import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { RunnerWindowProps } from "./RunnerWindow.types";
import styles from "./RunnerWindow.module.scss";

export default function RunnerWindow({
  exerciseTitle,
  exerciseNumber,
  description,
  requirements,
  testFunction,
  outputResult,
}: RunnerWindowProps) {
  const navigate = useNavigate();

  const [editorValue, setEditorValue] = useState<string>("");

  return (
    <section className={styles["section-box"]}>
      <h2 className={styles.title}>
        {exerciseTitle} {exerciseNumber}
      </h2>

      <div className={styles["description-box"]}>
        <p className={styles.description}>
          <b>Description: </b>
          {description}
        </p>
        <p className={styles.requirements}>
          <b>Requirements: </b>
          {requirements}
        </p>
      </div>

      <textarea
        className={styles.editor}
        value={editorValue}
        onChange={(e) => setEditorValue(e.target.value)}
        placeholder="Write your code here and return a value with a `return` keyword!"
      ></textarea>

      <div className={styles["btn-box"]}>
        <button onClick={() => navigate(-1)} className={styles["back-btn"]}>
          Back
        </button>
        <button onClick={() => navigator.clipboard.writeText(editorValue)}>
          Copy
        </button>

        <button
          onClick={() => testFunction(editorValue)}
          className={styles["run-btn"]}
        >
          Run
        </button>
        <button className={styles["next-btn"]}>Next</button>
      </div>

      <div className={styles["output-box"]}>
        <p>{outputResult}</p>
      </div>
    </section>
  );
}
