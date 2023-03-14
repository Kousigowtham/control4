import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

declare global {
  interface Window {
    navigateToAbout: any;
  }
}

const Home = () => {
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/about");
  };

  React.useEffect(() => {
    window.navigateToAbout = () => {
      navigate("/about");
    };
  }, []);
  return (
    <main className={styles.container}>
      <h3>Welcome to Techjays-Control4 test page</h3>
      <form onSubmit={submitHandler} id="login-form">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit" id="login-btn">
          Login
        </button>
      </form>
    </main>
  );
};

export default Home;
