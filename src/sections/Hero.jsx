import Button from "../components/ui/Button";
import { SITE } from "../constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col md:flex-row items-center justify-center gap-12 overflow-hidden px-6 lg:px-16"
    >
      {/* Background floating bubbles */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="absolute left-[10%] top-[20%] h-16 w-16 rounded-full bg-blue-400 animate-float" style={{ animationDuration: "7s", animationDelay: "0s" }} />
        <span className="absolute left-[80%] top-[15%] h-24 w-24 rounded-full bg-blue-400 animate-float" style={{ animationDuration: "9s", animationDelay: "1s" }} />
        <span className="absolute left-[25%] top-[70%] h-20 w-20 rounded-full bg-indigo-300 animate-float" style={{ animationDuration: "8s", animationDelay: "2s" }} />
        <span className="absolute left-[65%] top-[65%] h-12 w-12 rounded-full bg-blue-900 animate-float" style={{ animationDuration: "6s", animationDelay: "0.5s" }} />
        <span className="absolute left-[45%] top-[35%] h-10 w-10 rounded-full bg-blue-300/30 animate-float" style={{ animationDuration: "10s", animationDelay: "1.5s" }} />
        <span className="absolute left-[90%] top-[80%] h-14 w-14 rounded-full bg-indigo-400/20 animate-float" style={{ animationDuration: "7.5s", animationDelay: "2.5s" }} />
      </div>

      {/* Left Column: Text Content */}
      <div className="max-w-xl text-left md:w-1/2">
        <p className="mb-4 font-medium text-indigo-500">Hello, my name is</p>

        <h1 className="text-4xl font-bold text-blue-950 sm:text-6xl">
          {SITE.fullname}
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-gray-500 sm:text-4xl">
          I'm a {SITE.role}.
        </h2>

        <p className="mt-6 text-gray-600">
          I'm a Vocational High School student with a hobby in programming, especially in backend and game development.
        </p>

        <div className="mt-8 flex gap-4">
          <Button href="#projects">View my work</Button>
          <Button href="#contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="order-first flex justify-center md:order-last md:w-1/2">
        <img
          src="/images/hero-image.png"
          alt="Hero"
          className="w-full max-w-sm rounded-lg shadow-lg sm:max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
}