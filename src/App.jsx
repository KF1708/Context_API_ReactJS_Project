import UserContextProvider from "./providers/UserContextProvider";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./componentes/shared/PrivateRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute component={<Profile></Profile>}></PrivateRoute>
            }
          ></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
