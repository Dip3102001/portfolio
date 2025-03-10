import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center items-center p-4 bg-base-200">
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle bg-black text-white hover:bg-gray-700"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle bg-[#0077b5] text-white hover:bg-blue-600"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="mailto:your-email@example.com"
        className="btn btn-circle bg-gray-500 text-white hover:bg-gray-600"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default SocialIcons;
