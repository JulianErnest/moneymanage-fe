import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Styles from "../css/Register.module.css";
import bg from "../css/logo.png";
import authService from "../services/authService";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const homenig = () => {
    navigate("/");
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const register = await authService.register({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      confirm_password: confirmPassword,
    });
    console.log(register);
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.login}>
        <div className={Styles.logo} onClick={homenig}>
          <img src={bg}></img>MoneyManage
        </div>
        <label htmlFor="chk" aria-hidden="true">
          Register
        </label>

        <form onSubmit={onSubmit}>
          <input
            value={firstName}
            onChange={(t) => setFirstName(t.target.value)}
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          ></input>
          <input
            value={lastName}
            onChange={(t) => setlastName(t.target.value)}
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          ></input>
          <input
            value={email}
            onChange={(t) => setEmail(t.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            required
          ></input>
          <input
            value={password}
            onChange={(t) => setPassword(t.target.value)}
            type="password"
            name="pswd"
            placeholder="Password"
            required
          ></input>
          <input
            value={confirmPassword}
            onChange={(t) => setConfirmPassword(t.target.value)}
            type="password"
            name="conpswd"
            placeholder="Confirm Password"
            required
          ></input>
          <button>Sign-up</button>
        </form>

        <a className={Styles.reg} href="/Login">
          Already have an account?
        </a>
      </div>
    </div>
  );
}
export default Register;
