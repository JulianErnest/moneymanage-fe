import Styles from "../css/home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
    
  const getting = () => {
      navigate("/GettingStarted");
  };

  return (
    
      <div className={Styles.main}>
        <h1 className={Styles.header1}>Managing Your Money Made Easier</h1>
        <p className={Styles.para1}>MoneyManage is a financial management website that allows its users to input their monthly budget, <br></br>
        and their spendings to keep track of how much money they're spending on a monthly basis.</p>
        
        <button className={Styles.getStarted} onClick={getting}>
          Get Started
        </button>
        
      </div>
    
  );
}
