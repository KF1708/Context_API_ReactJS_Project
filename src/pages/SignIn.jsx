import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogIn.scss";
import axios from "axios";
import SignUpLink from "../componentes/SignUpLink";
import SignInButton from "../componentes/SignInButton";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email, //value and key name is same that why we can keep only key name
        password,
      };

      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signin",
        data
      );

      console.log(response?.data);

      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("myToken", token);
      }

      route("/profile");
    } catch (error) {
      alert;
      console.log(error);
    }
  };
  return (
    <div className="login-form-container">
      <div className="login-form-box">
        <h2>Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <SignInButton />
        </form>

        <SignUpLink />
      </div>
    </div>
  );
};

export default SignIn;
