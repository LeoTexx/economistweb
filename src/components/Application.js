import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from "../pages/Login";
import SignUp from "../pages/Signup";
import NewsPage from "../pages/NewsPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import { UserContext } from "../provider/UserProvider";

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <Router>
      <Switch>
        <PrivacyPolicy path="/privacy" exact />
        <NewsPage />
      </Switch>
    </Router>
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
