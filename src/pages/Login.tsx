import { type FormEvent, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStarshipContext } from "../../src/contexts/ShipsContext";

function Login(): JSX.Element {
  const navigate = useNavigate();
  const { setIsLoggedIn, setIsUserLoggedIn } = useStarshipContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.user);
        setIsLoggedIn(true);
        setIsUserLoggedIn(true);
        navigate("/starships");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="login-form">
      <div>
        <div className="login-title">
          <h1>LOG IN</h1>
        </div>
        <form
          onSubmit={(e) => {
            void handleSubmit(e);
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
            <div></div>
          </div>
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
          {error.length > 0 && <p>{error}</p>}
          <button className="login-signup-button" type="submit">
            LOG IN
          </button>
          <div>
            <div className="signup-below">
              <Link to="/users">
                <button type="button">or Sign Up</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
