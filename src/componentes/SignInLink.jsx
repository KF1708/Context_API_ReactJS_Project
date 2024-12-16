import { Link } from "react-router-dom";

const SignInLink = () => {
  return (
    <div>
      <Link to="/sign-in">
        <p>Already have an Account?</p>
      </Link>
    </div>
  );
};

export default SignInLink;
