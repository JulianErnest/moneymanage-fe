import { useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import headstyles from "../css/header.module.css";
import footerstyles from "../css/footer.module.css";
import logo from "../css/logo.png";
import { useNavigate } from "react-router-dom";
import fb from "../css/fb.png";
import insta from "../css/insta.png";
import twit from "../css/twit.png";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  
  const homenig = () => {
    navigate("/");
  };

  return (
    <div>
      {location.pathname === "/GettingStarted" && (
      <div>
      <div className={headstyles.header}>
        <div className={headstyles.logopic} onClick={homenig}>
          <img src={logo}></img>MoneyManage
        </div>
        
      </div>
      <div className={footerstyles.footer}>
        <p className={footerstyles.footerp1}>
          MoneyManage<br></br>
          © Copyright 2022</p>
        <a href="http://facebook.com" className={footerstyles.fb}><img src={fb} className={footerstyles.fb}></img></a>
        <a href="http://instagram.com" className={footerstyles.insta}><img src={insta} className={footerstyles.insta}></img></a>
        <a href="http://twitter.com" className={footerstyles.twit}><img src={twit} className={footerstyles.twit}></img></a>
      </div>
      </div>
      )}
      {outlet}
    </div>
  );
}
