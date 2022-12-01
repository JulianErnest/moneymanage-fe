import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const { user } = useContext(UserContext) as UserContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id == 0) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <h1>I'm the home layout</h1>
      {outlet}
    </div>
  );
}
