import React, { useState } from "react";
import "./Subscribe.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (email === "") {
      setError(true)
    } else {
      setError(false);
      alert("Email submitted successfully");
    }
  }

  return(
    <>
      <section className="subscribe">
        <h4>Sign up to our beta form</h4>
        <p>Sign up to our mailing list to find out more information and keep up to date about our activities</p>
        <form>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
          <button
            type="button"
            onClick={handleClick}
          >
            Subscribe
          </button>
        </form>
        <p>{error && 'Email field cannot be empty'}</p>
      </section>
    </>
  )
}