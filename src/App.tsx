import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton />
    </>
  );
}

export default App;
