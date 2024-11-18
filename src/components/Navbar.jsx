import logo from "../assets/CRLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import LanguageSwitcher from "./LangueageSwitcher";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <LanguageSwitcher/>
        <a 
          href="https://www.linkedin.com/in/cristian-camilo-guerrero-mendoza-462b76225/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Cartarus" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition-colors"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/cxrthxrxs/?theme=dark" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors"
        >
          <FaInstagram />
        </a>
        {/* <a 
          href="https://twitter.com/cartarus28" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaSquareXTwitter />
        </a> */}
      </div>
    </nav>
  );
};
