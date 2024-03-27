import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          value={formData.firstName}
          id="firstName"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          id="lastName"
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div>
          Full Name: {formData.firstName} {formData.lastName}
        </div>
      )}
    </div>
  );
}

export default App;
