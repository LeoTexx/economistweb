import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from "../pages/Login";
import SignUp from "../pages/Signup";
import NewsPage from "../pages/NewsPage";
import { UserContext } from "../provider/UserProvider";

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <NewsPage />
  ) : (
    <Router>
      <Switch>
        <SignUp path="/signup" />
        <SignIn path="/" />
      </Switch>
    </Router>
  );
}
export default Application;
