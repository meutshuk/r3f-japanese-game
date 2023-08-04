import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
    <color attach="background" args={["#ececec"]} />
    <Experience />
  </Canvas>
);
