import { type FormEvent, type ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

function Signup(): JSX.Element {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (res.ok) {
          return await res.json();
        } else {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }
      })
      .then((data) => {
        console.log(data);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError("Email already registered");
      });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="login-form">
      <div>
        <div className="login-title">
          <h1>SIGN UP</h1>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <input
              className="input-email"
              type="text"
              placeholder="Email"
              value={formData.email}
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          {error != null && <p>{error}</p>}
          <div>
            <input
              className="input-password"
              type="password"
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
            <button className="login-signup-button" type="submit">
              SIGN UP
            </button>
            <div className="signup-below">
              <Link to="/login">
                <button type="button">or Log In</button>
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
