import React, { useState } from "react";
import StudentCard from "./components/StudentCard";
import TextAnalyzer from "./components/TextAnalyzer";
import "./App.css";

function App() {
  const [page, setPage] = useState("student");

  return (
    <div className="app">

      <div className="main-card">

        <div className="page-buttons">
          <button
            className={page === "student" ? "active" : ""}
            onClick={() => setPage("student")}
          >
            Student Profile
          </button>

          <button
            className={page === "analyzer" ? "active" : ""}
            onClick={() => setPage("analyzer")}
          >
            Text Analyzer
          </button>
        </div>

        {page === "student" ? (
          <StudentCard
            name="Tailor Sana"
            course="BCA"
            semester="5"
            email="sana@gmail.com"
            phone="7898654532"
            city="Navsari"
          />
        ) : (
          <TextAnalyzer />
        )}

      </div>

    </div>
  );
}

export default App;
