import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Transforming Ideas into Digital Realities
          <br /> Web Development Unleashed
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CV Creation</h2>
          <p>
            Crafting standout CVs for a compelling narrative. As a web
            developer, I blend creativity and precision to showcase
            qualifications and tell a captivating story. Unlock opportunities
            with a personalized CV that resonates.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Portfolio Design</h2>
          <p>
            Elevate your online presence with my Portfolio Design. As a web
            developer, I craft compelling showcases that tell your unique story,
            leaving a lasting impact. Unlock the full potential of your work
            with a standout visual narrative.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web application development</h2>
          <p>
            I craft user-friendly, scalable web applications using HTML5, CSS3,
            JavaScript, React, Angular, and Node.js. My dynamic, interactive web
            solutions align perfectly with your specific business needs.
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
