import axios from "axios";
import { useEffect, useState } from "react";
import { UserContext } from "../utils/UserContex";

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("myToken") || null);

  console.log(token);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://staging-be-ecom.techserve4u.com/api/user/verify", //url

          {}, //paylode
          {
            //token
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        //console.log(response.data);
        setUserData(response?.data?.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <UserContext.Provider value={[token, setToken, userData]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
