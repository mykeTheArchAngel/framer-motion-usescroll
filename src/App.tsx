import "./styles.css";
import { LoremIpsum } from "./components/LoremIpsum";
import { motion, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      <LoremIpsum />
    </>
  );
}
