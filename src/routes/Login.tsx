import Stylez from "../css/Login.module.css";
import bg from "../css/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../services/authService";

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const homenig = () => {
    navigate("/");
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const login = await authService.login({
      email, password
    });
    console.log(login);
  }
    
  return (
    <div className={Stylez.main}>
      <div className={Stylez.login}>
        <div className={Stylez.logo} onClick={homenig}>
          <img src={bg}></img>MoneyManage
        </div>
        <label htmlFor="chk" aria-hidden="true">
            Login
        </label>

        <form onSubmit={(e) => onSubmit(e)}>
          
          <input
            value={email}
            onChange={(t) => setEmail(t.target.value)}
            type="email" 
            name="email" 
            placeholder="Email"
            className={Stylez.inp} 
            required>
          </input>
          <input
            value={password}
            onChange={(t) => setPassword(t.target.value)}
            type="password"
            name="pswd"
            placeholder="Password"
            className={Stylez.inp} 
            required>
          </input>
          <button className={Stylez.btn} >Sign-in</button>
        </form>

        <a className={Stylez.reg} href="/Register">
          Don't have an account yet?
        </a>
      </div>
    </div>
  );
}
export default Login;
