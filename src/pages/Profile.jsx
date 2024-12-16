import { useContext } from "react";
import "../styles/LogIn.scss";
import { UserContext } from "../utils/UserContex";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaHouseUser, FaPhoneSquare } from "react-icons/fa";

const Profile = () => {
  const [token, , userData] = useContext(UserContext);

  //console.log(token);

  console.log("userData", userData, token);

  return (
    <div className="login-form-container">
      <div className="profile">
        <h2>Welcome to your Profile !</h2>
        <img src="../public/images/Profile.img.avif" alt="profile img" />
        <h3>Name : {userData?.name} </h3>
        <h3>
          <IoPersonCircleSharp
            style={{ color: "orange", paddingRight: "5px" }}
          />
          Role: {userData?.role}
        </h3>
        <h3>
          {" "}
          <MdOutlineMail style={{ color: "orange", paddingRight: "5px" }} />
          Email : {userData?.email}
        </h3>
        <h3>
          <FaPhoneSquare style={{ color: "orange", paddingRight: "5px" }} />
          Phone : 0987654321{" "}
        </h3>
        <h3>
          <FaHouseUser
            className=""
            style={{ color: "orange", paddingRight: "5px" }}
          />
          Address : VA. USA{" "}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
