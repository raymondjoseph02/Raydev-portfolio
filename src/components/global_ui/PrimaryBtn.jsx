import PropTypes from "prop-types";

const PrimaryBtn = ({ hasDarkBg }) => {
  return (
    <button
      className={`group border-[1px] ${
        hasDarkBg ? " border-black" : "border-gray-200"
      } py-2 rounded-sm before:content-[''] before:h-full before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:duration-300 before:absolute relative before:bg-foreground before:left-0 before:top-0 px-10 font-sirin text-lg  text-foreground hover:text-primary-foreground `}
    >
      <span className="relative ">Resume</span>
    </button>
  );
};

PrimaryBtn.propTypes = {
  hasDarkBg: PropTypes.bool.isRequired,
};

export default PrimaryBtn;
