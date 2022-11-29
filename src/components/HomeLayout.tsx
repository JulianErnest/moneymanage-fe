import { useOutlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function HomeLayout() {
  const outlet = useOutlet();
  const location = useLocation();
  console.log(location);

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
