import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import bg from "../css/logo.png";

import Styles from "../css/Login.module.css";
import authService from "../services/authService";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(UserContext) as UserContextType;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await authService.login({
      email,
      password,
    });
    setToken(response.data.token);
    setUser(response.data.user);
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.login}>
        <div className={Styles.logo} onClick={() => navigate("/")}>
          <img src={bg}></img>MoneyManage
        </div>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            className={Styles.inp}
            value={email}
            onChange={(t) => setEmail(t.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            required
          ></input>
          <input
            className={Styles.inp}
            value={password}
            onChange={(t) => setPassword(t.target.value)}
            type="password"
            name="pswd"
            placeholder="Password"
            required
          ></input>
          <button className={Styles.btn}>Sign-in</button>
        </form>
        <a className={Styles.reg} onClick={() => navigate("/register")}>
          Don't have an account yet?
        </a>
      </div>
    </div>
  );
}
export default Login;
