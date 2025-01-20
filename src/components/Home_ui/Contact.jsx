import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="px-40 py-16">
      <div className="bg-[#F3F4F6] p-10 px-48 flex-col flex gap-8 rounded-lg">
        <div>
          <p className="text-center text-3xl font-sirin  pb-4">Get in touch!</p>
          <p className="text-center text-xl  font-sirin font-thin text-gray-500">
            I’m currently open to joining a new team of creative developers.
            Also, if you have a question, proposal, idea or just want to say hi,
            Go ahead.
          </p>
        </div>
        <ul className="flex flex-col gap-3 text-lg font-sirin">
          <li>
            <span></span>
            <p>Ibadan, Nigeria</p>
          </li>
          <li>+2348027197229</li>
          <li>amraymondjoseph@gmail.com</li>
        </ul>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
