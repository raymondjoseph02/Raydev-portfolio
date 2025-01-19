import PrimaryBtn from "../PrimaryBtn";
import avater_with_laptop from "../../assets/images/avater_with_laptop.png";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
function HeroSection() {
  return (
    <section className="bg-[#F3F4F6] py-20 px-40 flex items-center justify-between">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold  font-arimo">Raymond J.</h1>
        <div className="flex-col flex gap-3">
          <p className="font-sirin text-3xl font-medium max-w-[39ch]">
            I&#39;m a creative{" "}
            <span className=" underline font-semibold">Frontend developer</span>{" "}
            passionate about converting ideas into standard and scalable
            products.
          </p>
          <div>
            <PrimaryBtn />
          </div>{" "}
        </div>
      </div>
      <div className="bg-white rounded-full relative">
        <motion.div
          initial={{ top: "55%", left: "50%", opacity: 0 }}
          animate={{ top: "20%", left: "-12%", opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.8 }}
          className="size-9 bg-gray-400 rounded-full absolute"
        ></motion.div>
        <motion.div
          initial={{ top: "55%", right: "50%", opacity: 0 }}
          animate={{ top: "-5%", right: "10%", opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.8 }}
          className="size-9 bg-gray-400 rounded-full absolute"
        ></motion.div>
        <motion.div
          initial={{ bottom: "55%", right: "50%", opacity: 0 }}
          animate={{ bottom: "-5%", right: "10%", opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.8 }}
          className="size-9 bg-gray-400 rounded-full absolute flex justify-center items-center"
        >
          <FaReact className="text-blue-300 size-full" />
        </motion.div>

        <motion.img
          initial={{ x: 80, opacity: 0.4 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          src={avater_with_laptop}
          alt=""
          className="w-80"
        />
      </div>
    </section>
  );
}

export default HeroSection;
