import { useState } from "react";
import "../styles/LogIn.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignUpButton from "../componentes/SignUpButton";
import VerifyButton from "../componentes/VerifyButton";
import SignInLink from "../componentes/SignInLink";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);

  const [otp, setOtp] = useState("");

  const route = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: fullName,
        password, //value and key name is same that why we can keep only key name
        email,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        data
      );

      if (response?.data?.isOtpSend) {
        // by adding ?. optional chaining evaluates to undefined instead of throwing an error.
        setIsOtpSend(true);
      }

      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();

    try {
      const data = {
        otp, //value and key name is same that why we can keep only key name
        email,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        data
      );

      console.log("otp", response);

      if (response?.data?.success) {
        alert("Registered successfully!");
        setIsOtpSend(false);
        route("/sign-in");
      }
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-form-container">
      {isOtpSend ? (
        <div className="otp-section">
          <h2>Verify OTP</h2>
          <form onSubmit={handleOTP} className="login-form">
            <div className="form-group">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
              />
            </div>

            <VerifyButton />
          </form>
        </div>
      ) : (
        <div className="login-form-box">
          <h2>Sign Up</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="form-group">
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
            <SignUpButton />
          </form>

          <SignInLink />
        </div>
      )}
    </div>
  );
};

export default SignUp;
