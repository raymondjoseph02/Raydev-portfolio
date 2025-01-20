import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="py-32 bg-black flex flex-col items-center justify-center gap-10">
      <div>
        <div className="relative">
          <h3 className="text-white text-6xl font-bold font-sirin relative z-30">
            Let&#39;s Work Together
          </h3>
          <span className="absolute size-20 rounded-full inline-block bg-gray-400 right-0  top-0"></span>
        </div>
      </div>

      <p className="text-white text-2xl font-medium font-sirin bg-blue-300/30 px-3">
        Bringing ideas to life, one pixel at a time 🤙
      </p>
      <div className="flex justify-between gap-10">
        <div className="size-10 rounded-full border-white border-[1px] flex items-center justify-center">
          <FaGithub className="text-white" size={22} />
        </div>
        <div className="size-10 rounded-full border-white border-[1px] flex items-center justify-center">
          <FaLinkedin className="text-white" size={22} />
        </div>
        <div className="size-10 rounded-full border-white border-[1px] flex items-center justify-center">
          <FaTwitter className="text-white" size={22} />
        </div>
      </div>
      <div>
        <p className="text-white">&copy; 2025 Built by Raydev02,</p>{" "}
      </div>
    </section>
  );
};

export default Footer;
