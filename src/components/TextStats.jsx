import React from "react";

function TextStats({ characterCount, wordCount }) {
  return (
    <div className="stats">
      <h3>Text Statistics</h3>

      <p>
        Number of Characters: <strong>{characterCount}</strong>
      </p>

      <p>
        Number of Words: <strong>{wordCount}</strong>
      </p>
    </div>
  );
}

export default TextStats;