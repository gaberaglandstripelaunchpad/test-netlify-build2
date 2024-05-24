import React from "react";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <div className="container">
      <p className="message">Your subscription was successful</p>

      {/* Show manage billing button */}
      <form action="/api/create-portal-session" method="POST">
        <button className="button" type="submit">
          Manage billing information
        </button>
      </form>

      <Link to="/" className="button">
        Back to plans
      </Link>
    </div>
  );
}

