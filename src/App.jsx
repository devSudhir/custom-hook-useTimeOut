import { useTimeOut } from "./Hooks/UseTimeOut";
import "./styles.css";

export default function App() {
  const [ready] = useTimeOut(5000);
  return (
    <div className="App">
      <h1>Hello Guys</h1>
      {ready && <h2>Welcome to homepage</h2>}
    </div>
  );
}
