import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/suwantha-darshana-3b9856219/">
            <img src="./linkedin.png" alt="likedin image" />
          </a>
          <a href="https://github.com/SuwanthaDarshana">
            <img src="./github.png" alt="github image" />
          </a>
          <a href="https://twitter.com/Suwa9_9">
            <img src="./twitter.png" alt="twitter image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
