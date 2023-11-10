import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        visible: { opacity: 1, x:1000, transition:{duration:2} },
        hidden: { opacity: 0 },
      }

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        // initial="hidden"  
        // animate="visible"
        transition={{ duration: 1 }}
        animate={ open ? "visible" : "hidden"  }
      ></motion.div>
      <button onClick={()=>setOpen(prev=>!prev)}>ClickHere</button>
    </div>
  );
};

export default Test;
