function PrimaryBtn() {
  return (
    <button className="group border-[1px] py-2 rounded-sm before:content-[''] before:h-full before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:duration-300 before:absolute relative before:bg-foreground before:left-0 before:top-0 px-10 font-sirin text-lg  text-foreground hover:text-primary-foreground   ">
      <span className="relative ">Resume</span>
    </button>
  );
}

export default PrimaryBtn;
