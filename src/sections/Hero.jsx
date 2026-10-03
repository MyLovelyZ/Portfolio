import Button from "../components/ui/Button";
import { SITE } from "../constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col md:flex-row items-center justify-center gap-12 overflow-hidden px-6 lg:px-16"
    >
      {/* Left Column: Text Content */}
      <div className="max-w-xl text-left md:w-1/2">
        <p className="mb-4 animate-fade-up motion-reduce:animate-none font-medium text-indigo-500 text-shadow-[0_4px_10px_rgba(99,102,241,0.15)] [animation-delay:200ms]">
          Hello, my name is
        </p>

        <h1 className="animate-fade-up motion-reduce:animate-none text-4xl font-bold text-blue-950 text-shadow-[0_8px_16px_rgba(99,102,241,0.18)] [animation-delay:300ms] sm:text-6xl">
          {SITE.fullname}
        </h1>

        <h2 className="mt-2 animate-fade-up motion-reduce:animate-none text-2xl font-semibold text-gray-500 text-shadow-[0_6px_12px_rgba(107,114,128,0.12)] [animation-delay:400ms] sm:text-4xl">
          I'm a {SITE.role}.
        </h2>

        <p className="mt-6 animate-fade-up motion-reduce:animate-none text-gray-600 text-shadow-[0_3px_8px_rgba(156,163,175,0.15)] [animation-delay:500ms]">
          I'm a Vocational High School student with a hobby in programming, especially in backend development and Artificial Intelligence.
        </p>

        <div className="mt-8 flex animate-fade-up motion-reduce:animate-none gap-4 [animation-delay:600ms]">
          <Button href="#projects">View my work</Button>
          <Button href="#contact" variant="outline">
            Get in touch ah testing doang ini
          </Button>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="order-first flex justify-center md:order-last md:w-1/2">
        <div className="group relative w-full max-w-sm animate-zoom-in [animation-delay:350ms] motion-reduce:animate-none sm:max-w-md md:max-w-lg">
          {/* Soft gradient glow behind the image */}
          <div className="absolute -inset-4 transform-gpu rounded-full bg-linear-to-tr from-indigo-500 via-purple-400 to-blue-500 opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-45" />

          {/* Gradient blob peeking out behind the image */}
          <div className="absolute inset-0 rotate-6 transform-gpu animate-blob bg-linear-to-tr from-indigo-500/50 to-blue-500/50 [animation-delay:-5s] transition-transform duration-500 group-hover:rotate-3 motion-reduce:animate-none" />

          <img  
            src="/images/idk.png"
            alt="Hero"
            className="relative aspect-square w-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] object-cover shadow-lg transition-transform duration-500 group-hover:-translate-y-2"
          />
        </div>
      </div>
    </section>
  );
}