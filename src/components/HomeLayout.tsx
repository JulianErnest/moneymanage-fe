import { useContext, useEffect } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";

export default function HomeLayout() {
  const { user } = useContext(UserContext) as UserContextType;
  const outlet = useOutlet();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user.id != 0) {
      navigate("/gettingstarted");
    }
  }, [user]);

  return (
    <div>
      {location.pathname === "/" && (
        <nav>
          <p>Nav bar goes here</p>
        </nav>
      )}

      {outlet}
    </div>
  );
}
