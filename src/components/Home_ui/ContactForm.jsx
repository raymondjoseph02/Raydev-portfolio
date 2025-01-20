function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex-col flex ">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="bg-transparent h-12 border-b-[1px] border-b-black px-4 outline-none placeholder:font-sirin font-arimo"
        />
      </div>
      <div className="flex-col flex ">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="bg-transparent h-12 border-b-[1px] border-b-black px-4 outline-none placeholder:font-sirin"
        />
      </div>
      <div className="flex-col flex ">
        <label htmlFor="subject">Subject</label>
        <input
          type="subject"
          name="subject"
          id="subject"
          placeholder="Enter a subject "
          className="bg-transparent h-12 border-b-[1px] border-b-black px-4 outline-none placeholder:font-sirin"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Leave a message"
          className="bg-transparent outline-none p-4 border-b-[1px] min-h-40 border-b-black resize-none placeholder:font-sirin"
        ></textarea>
      </div>
      <div>
        <button className="bg-black py-3 px-10 text-white hover:bg-gray-300 mt-3 hover:text-black transition-colors ease-in-out duration-500">
          send message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
