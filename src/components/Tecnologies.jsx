import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiRedux } from "react-icons/si";



export const Tecnologies = () => {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-purple-200 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-2 border-purple-200 p-4">
            <SiJavascript   className="text-7xl text-amber-300"/>
        </div>
        <div className="rounded-2xl border-2 border-purple-200 p-4">
            <SiRedux  className="text-7xl text-purple-400"/>
        </div>
        <div className="rounded-2xl border-2 border-purple-200  p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-2 border-purple-200 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </div>
        <div className="rounded-2xl border-2 border-purple-200 p-4">
            <FaDocker  className="text-7xl text-sky-400"/>
        </div>
      </div>
    </div>
  );
};
