import React, { useState, useEffect } from "react";
import TextStats from "./TextStats";

function TextAnalyzer() {
  const [text, setText] = useState("");

  const characterCount = text.length;

  const wordCount =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  useEffect(() => {
    document.title = `Characters: ${characterCount}`;
  }, [characterCount]);

  return (
    <div className="page">

      <div className="analyzer-card">

        <h1>Text Analyzer</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        />

        <h3 className="entered-heading">
          Entered Text:
        </h3>

        <div className="entered-text">
          {text}
        </div>

        <TextStats
          characterCount={characterCount}
          wordCount={wordCount}
        />

      </div>

    </div>
  );
}

export default TextAnalyzer;