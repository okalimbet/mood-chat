
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import { selectUser } from "../redux/userSlice";
import Login from "../Login/Login";
import { auth } from "../../firebase";
import { login, logout } from "../redux/userSlice";

const App = () => {
  const dispatch = useDispatch();
  console.log(selectUser)
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;