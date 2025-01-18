import { motion } from "framer-motion";
function About() {
  return (
    <section className="py-10 md:py-20 flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-normal font-arimo capitalize">
          Yo, Craft your
        </p>
        <motion.p
          initial={{
            x: -30,
            opacity: 0.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="text-5xl font-semibold font-alegreya  py-5"
        >
          imaginations to life.
        </motion.p>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "backInOut",
          }}
          className="font-sirin text-2xl max-w-[39ch] text-center"
        >
          I develop human centered products with unique modern experiences
        </motion.p>
        <div className="w-[2px] h-60 py-4">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ originY: "bottom", duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
            style={{
              originY: "top",
            }}
            className="h-full  bg-black w-full"
          ></motion.div>
        </div>
        <p className="text-5xl font-normal font-alegreya capitalize">
          I build ideas you want
        </p>
        <motion.p
          initial={{
            x: -30,
            opacity: 0.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="text-5xl font-semibold font-alegreya  py-5"
        >
          on the web.
        </motion.p>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "backInOut",
          }}
          className="font-sirin text-2xl max-w-[39ch] text-center"
        >
          Strategic driven solutions for the best user experience
        </motion.p>
      </div>
    </section>
  );
}

export default About;
