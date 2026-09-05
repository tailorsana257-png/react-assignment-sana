import React, { useState } from "react";

function StudentCard({
  name,
  course,
  semester,
  email,
  phone,
  city
}) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="student-card">

      <h1>Student Profile</h1>

      <h2>{name}</h2>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Semester:</strong> {semester}
      </p>

      {showDetails && (
        <div className="details">
          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Phone:</strong> {phone}
          </p>

          <p>
            <strong>City:</strong> {city}
          </p>
        </div>
      )}

      <button
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

    </div>
  );
}

export default StudentCard;
