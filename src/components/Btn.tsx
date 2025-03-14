import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center items-center p-4">
      <a
        href="https://github.com/Dip3102001"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle bg-black text-white hover:bg-gray-700"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://linkedin.com/in/dip3-patel"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle bg-[#0077b5] text-white hover:bg-blue-600"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="https://leetcode.com/u/Dip_01/"
        className="btn btn-circle bg-gray-500 text-white hover:bg-gray-600"
      >
        <FaCode size={20} />
      </a>

      <a
        href="mailto:dv9patel@uwaterloo.ca"
        className="btn btn-circle bg-gray-500 text-white hover:bg-gray-600"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default SocialIcons;
