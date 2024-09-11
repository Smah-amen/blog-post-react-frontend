import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/Login";
import AppNavbar from "./component/AppNavbar/AppNavbar";
import Register from "./component/Register/Register";
import Home from "./component/home/Home";
import FormEdit from "./component/FormEdit/FormEdit";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState();
  const login = () => setIsLoggedin(true);
  const logout = () => setIsLoggedin(false);

  useEffect(() => {
    setIsLoggedin(sessionStorage.getItem("token") ? true : false);
  }, []);

  const [addPostClicked, setAddpostClicked] = useState(false);

  const setAddpostClickedTrue = () => {
    setAddpostClicked(true);
  };
  const setAddpostClickedFalse = () => {
    setAddpostClicked(false);
  };

  return (
    <>
      <BrowserRouter>
        <AppNavbar isLoggedin={isLoggedin} logout={logout} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setAddpostClickedTrue={setAddpostClickedTrue}
                setAddpostClickedFalse={setAddpostClickedFalse}
              />
            }
          />
          <Route
            path="/login"
            element={<Login login={login} addPostClicked={addPostClicked} />}
          />
          <Route
            path="/register"
            element={<Register login={login} addPostClicked={addPostClicked} />}
          />
          <Route path="/formEdit" element={<FormEdit />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
