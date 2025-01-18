import { motion } from "framer-motion";
function Mystory() {
  return (
    <section className="px-40 py-20 bg-[#F3F4F6] flex gap-x-40">
      <div>
        <h3 className="flex flex-col gap-2 font-semibold text-3xl font-alegreya uppercase">
          <span>my</span>
          <span>story</span>
        </h3>
      </div>
      <div className="gap-5 flex-col flex ">
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className=""
        >
          {" "}
          <p className="text-2xl leading-[33px] font-sirin">
            Hello! My name is Raymond, I enjoy converting ideas into real life
            products and building solutions that runs on the internet. Over the
            years, i&#39;ve developed products for businesses around the world,
            providing solutions on small business websites to enteprise web
            applications with focus on quality, accessibility and fast user
            experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className=""
        >
          {" "}
          <p className="text-2xl leading-[33px] font-sirin">
            I have had the great priviledge to work as a Frontend engineer for a
            Trading agency, an event organizing agency, an Architectural
            showcase agency, internal management applications and others.
            Fast-Forward to today, I work as a Frontend engineer at ECSCORP,
            building accessible digital experience to connect businesses that
            require their services.
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className=""
        >
          {" "}
          <p className="text-2xl leading-[33px] font-sirin">
            I believe giving is receiving, so I give back to the Tech ecosystem
            by building the community, Techers, where individuals building a
            career in the Tech space support eachother and I share software
            development articles & resources on my online platforms.
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className=""
        >
          <p className="text-2xl leading-[33px] font-sirin">
            What I work with:
          </p>
          <p className="text-2xl leading-[33px] font-sirin">
            Languages: Html, Css, Sass, Javascript, Typescript.
          </p>
          <p className="text-2xl leading-[33px] font-sirin">
            Technologies: React.js, framer motion, SCSS, Tailwind, Firebase,
            Git, Netlify, .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Mystory;
