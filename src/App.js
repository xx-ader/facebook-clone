import "./App.css";
import { Feed } from "./components/Feed";
import Header from "./components/Header";
import { Login } from "./components/Login";
import SideBar from "./components/SideBar";
import Widget from "./components/Widget";
import { useStateValue } from "./components/ContextProv";
import { useEffect, useState } from "react";
import { auth } from "./Firebase/firebase";
import { actionTypes } from "./components/Reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((_user) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: _user,
      });
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app_body">
              <SideBar />
              <Feed />
              <Widget />
              {/*app body*/}
              {/**side bar */}
              {/**feed */}
              {/**widgets */}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
