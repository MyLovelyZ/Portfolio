import Button from "../components/ui/Button";
import { SITE } from "../constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl px-6 py-24 text-center"
    >
      <h2 className="mb-4 text-2xl font-bold text-white">
        <span className="text-indigo-500">04.</span> Get In Touch
      </h2>

      <p className="mb-8 text-gray-400">
        I'm open to new opportunities and collaborations. Have a question or just
        want to say hi? My inbox is always open.
      </p>

      {/* A mailto: link opens the visitor's email client */}
      <Button href={`mailto:${SITE.email}`}>Say hello</Button>
    </section>
  );
}
