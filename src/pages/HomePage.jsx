import SignInLink from "../componentes/SignInLink";
import SignUpLink from "../componentes/SignUpLink";

const HomePage = () => {
  return (
    <div className="login-form-container">
      <div className="home-page">
        <img src="../public/images/Logo.img.png" alt="Logo Image" />
        <h1>Welcome To Our Page!</h1>

        <SignUpLink />

        <SignInLink />
      </div>
    </div>
  );
};

export default HomePage;
