import { Link } from "react-router-dom";

const SignUpLink = () => {
  return (
    <div>
      <Link to="/sign-up">
        <p>Create a new Account!</p>
      </Link>
    </div>
  );
};

export default SignUpLink;
