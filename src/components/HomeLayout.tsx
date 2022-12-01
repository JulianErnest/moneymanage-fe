import { useContext, useEffect } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";

import headstyles from "../css/header.module.css";
import footerstyles from "../css/footer.module.css";
import logo from "../css/logo.png";
import fb from "../css/fb.png";
import insta from "../css/insta.png";
import twit from "../css/twit.png";
export default function HomeLayout() {
  const { user } = useContext(UserContext) as UserContextType;
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const homenig = () => {
    navigate("/");
  };

  useEffect(() => {
    if (user.id != 0) {
      navigate("/gettingstarted");
    }
  }, [user]);

  return (
    <div>
      {location.pathname === "/" && (
        <div>
          <div className={headstyles.header}>
            <div className={headstyles.logopic} onClick={homenig}>
              <img src={logo}></img>MoneyManage
            </div>
            <div className={headstyles.headerright}>
              <a className={headstyles.loginbutton} href="/Login">
                Log-in
              </a>
              <a className={headstyles.registerbutton} href="/Register">
                Register
              </a>
            </div>
          </div>

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
        {outlet}
    </div>
  );
}
