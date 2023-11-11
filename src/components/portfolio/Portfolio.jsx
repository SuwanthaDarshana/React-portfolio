import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Student Management System", 
    img: "../../../public/edulabs.png",
    desc:"Experience efficiency with our Student Management System. Built on Angular and Spring Boot, it ensures seamless data management from enrollment to grading. Elevate your institution with this modern and user-friendly solution.",
  },
  {
    id: 2,
    title: "Secret Message Web App",
    img: "../../../public/secret.png",
    desc: "It's a secret message display site built with Node.js, MongoDB, and secured with Passport.js. Users can log in with their email and password or simply use their Google account for easy access. You can share your secrets or read messages from other users, making it a fun and interactive space for everyone.",
  },
  {
    id: 3,
    title: "Gaming Web UI",
    img: "../../../public/gameweb.png",
    desc:"Dive into gaming excellence with our sleek and immersive web interface. Trending titles, seamless navigation, and stunning visuals await, enhancing your gaming journey. Elevate your experience with an interface designed for both style and functionality."
  },
//   {
//     id: 4,
//     title: "Music App",
//     img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//   },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
