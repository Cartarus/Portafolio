import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tooltip = ({ children, label }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden w-max px-2 py-1 text-sm text-white bg-neutral-900 rounded group-hover:block">
        {label}
      </div>
    </div>
  );
};

export const Tecnologies = () => {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Tooltip label="ReactJS">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-purple-200 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
        </Tooltip>

        <Tooltip label="JavaScript">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-purple-200 p-4"
          >
            <SiJavascript className="text-7xl text-amber-300" />
          </motion.div>
        </Tooltip>

        <Tooltip label="Redux">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-purple-200 p-4"
          >
            <SiRedux className="text-7xl text-purple-400" />
          </motion.div>
        </Tooltip>

        <Tooltip label="Node.js">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-purple-200  p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
        </Tooltip>

        <Tooltip label="PostgreSQL">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-purple-200 p-4"
          >
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </motion.div>
        </Tooltip>

        <Tooltip label="Docker">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-purple-200 p-4"
          >
            <FaDocker className="text-7xl text-sky-400" />
          </motion.div>
        </Tooltip>
      </motion.div>
    </div>
  );
};
