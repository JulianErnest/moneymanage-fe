import { useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import headstyles from "../css/header.module.css";
import footerstyles from "../css/footer.module.css";
import logo from "../css/logo.png";
import fb from "../css/fb.png";
import insta from "../css/insta.png";
import twit from "../css/twit.png";
import { UserContext } from "../context/UserContext";
import { UserContextType } from "../context/User";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext) as UserContextType;

  const homenig = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(user);
    if (user.id == 0) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      {location.pathname.toLowerCase() === "/gettingStarted" && (
        <div>
          <div className={headstyles.header}>
            <div className={headstyles.logopic} onClick={homenig}>
              <img src={logo}></img>
              <h1>MoneyManage</h1>
            </div>
          </div>
          {outlet}
          <div className={footerstyles.footer}>
            <p className={footerstyles.footerp1}>
              MoneyManage<br></br>© Copyright 2022
            </p>
            <a href="http://facebook.com" className={footerstyles.fb}>
              <img src={fb} className={footerstyles.fb}></img>
            </a>
            <a href="http://instagram.com" className={footerstyles.insta}>
              <img src={insta} className={footerstyles.insta}></img>
            </a>
            <a href="http://twitter.com" className={footerstyles.twit}>
              <img src={twit} className={footerstyles.twit}></img>
            </a>
          </div>
        </div>
      )}
      
    </div>
  );
}
