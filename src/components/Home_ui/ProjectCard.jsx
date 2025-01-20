import { ExternalLink } from "lucide-react";
import smart_filing from "../../assets/images/Screen Shot 2025-01-07 at 10.26.36 AM.png";
import { motion } from "framer-motion";
function ProjectCard() {
  return (
    <div className="flex justify-between bg-white p-4">
      <div className="basis-1/2">
        <img src={smart_filing} alt="" className="aspect-video object-cover" />
      </div>
      <div className="basis-[40%] flex flex-col gap-10">
        <p className="text-4xl text-primary/75 font-alegreya">
          <motion.span
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="inline-block"
          >
            0
          </motion.span>
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="inline-block"
          >
            3
          </motion.span>
        </p>
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeIn",
            }}
            className="text-5xl font-alegreya"
          >
            scaple walker
          </motion.p>
          <motion.p
            initial={{
              x: 30,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            className="text-2xl font-sirin text-primary/65"
          >
            {" "}
            I led the frontend development of an architectural website to
            display an architect designs
          </motion.p>
          <motion.p
            initial={{
              y: 30,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            className="text-2xl font-sirin text-primary/65"
          >
            Skills/Tools : Typescript, Next.js, Css, TailwindCSS, Swiper.js,
            Firebase Auth API, Recoil, TMDB(The movie database) API, Git,
            Vercel.
          </motion.p>
          <ExternalLink />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
