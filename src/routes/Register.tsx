import Styles from "../css/Register.module.css";
import bg from "../css/logo.png";
import {useNavigate} from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  const homenig = () => {
   
    navigate('/');
  };
  return (
    
    <div className={Styles.main} > 
      
			<div className={Styles.login}>
      <div className={Styles.logo} onClick={homenig}><img src={bg}></img>MoneyManage</div>
      

				<form>
					<label htmlFor="chk" aria-hidden="true">Register</label>
					<input type="email" name="email" placeholder="Email" required></input>
					<input type="password" name="pswd" placeholder="Password" required></input>
          <input type="confirmpassword" name="conpswd" placeholder="Confirm Password" required></input>
					<button>Sign-up</button>
				</form>
        
        <a className={Styles.reg} href="/Login">Already have an account?</a>
        
      
      
			</div>
      
	</div>
  );
}
export default Register;