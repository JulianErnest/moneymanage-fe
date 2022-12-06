import { useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import headstyles from "../css/header.module.css";
import footerstyles from "../css/footer.module.css";
import logo from "../css/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { UserContext } from "../context/UserContext";
import { UserContextType } from "../context/User";

const allowedRoutes = ["/gettingstarted", "/dashboard", "/accounts"];

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

  console.log(location.pathname);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {allowedRoutes.includes(location.pathname.toLowerCase()) && (
        <>
          <div className={headstyles.header}>
            <div className={headstyles.logopic} onClick={homenig}>
              <img src={logo}></img>
              <h3 className={headstyles.title}>MoneyManage</h3>
            </div>
          </div>
          {outlet}
          <div className={footerstyles.footerProtected}>
            <p className={footerstyles.footerp1}>
              MoneyManage<br></br>© Copyright 2022
            </p>
            <a href="http://facebook.com" className={footerstyles.fb}>
              <AiFillLinkedin className={footerstyles.icon} size={40} />
            </a>
            <a href="http://instagram.com" className={footerstyles.insta}>
              <AiFillInstagram className={footerstyles.icon} size={40} />
            </a>
            <a href="http://twitter.com" className={footerstyles.twit}>
              <AiOutlineTwitter className={footerstyles.icon} size={40} />
            </a>
          </div>
        </>
      )}
    </div>
  );
}
