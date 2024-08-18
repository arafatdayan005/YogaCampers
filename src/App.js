import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Providers/AuthProviders";

function App() {
  const { setDark } = useContext(AuthContext);
  useEffect(() => {
    const BUTTON = document.getElementById("toggle");
    const BUTTONNAV = document.getElementById("toggle-nav");

    if (localStorage.theme === "dark") {
      BUTTON.setAttribute("aria-pressed", true);
      BUTTONNAV.setAttribute("aria-pressed", true);
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      BUTTON.setAttribute("aria-pressed", false);
      BUTTONNAV.setAttribute("aria-pressed", false);
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, [setDark]);

  return (
    <>
      <Navbar></Navbar>
      <div className="pt-12 lg:pt-20 dark:bg-teal-950 duration-500">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
