import aboutImg from "../assets/aboutCr.jpg";
import { ABOUT_TEXT, ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-purple-400">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="w-8/12 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full my-8 lg:w-1/2 text-justify ">
          <div className="flex flex-col justify-center lg:justify-start">
            <p className=" max-w-2xl ">{ABOUT_TEXT}</p>
            <br />
            <p className=" max-w-2xl ">{ABOUT_TEXT2}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
