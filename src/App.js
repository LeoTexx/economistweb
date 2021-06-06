import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import UserProvider from "./provider/UserProvider";
import Application from "./components/Application";
export default function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
