import { useOutlet } from "react-router-dom";

export default function HomeLayout() {
  const outlet = useOutlet();
  return (
    <div>
      <nav>
        <p>Nav bar goes here</p>
      </nav>
      {outlet}
    </div>
  );
}
