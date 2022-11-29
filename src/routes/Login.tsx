import Styles from "../css/Login.module.css";
import bg from "../css/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const homenig = () => {
    navigate("/");
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {}

  return (
    <div className={Styles.main}>
      <div className={Styles.login}>
        <div className={Styles.logo} onClick={homenig}>
          <img src={bg}></img>MoneyManage
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required></input>
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
          ></input>
          <button>Sign-in</button>
        </form>

        <a className={Styles.reg} href="/Register">
          Don't have an account yet?
        </a>
      </div>
    </div>
  );
}
export default Login;
