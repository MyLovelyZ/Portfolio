import Button from "../components/ui/Button";
import { SITE } from "../constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-12 px-6 lg:px-16 bg-gray-200"
    >
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
      <div className="flex justify-center md:w-1/2">
        <img
          src="/images/hero-image.png"
          alt="Hero"
          className="w-full max-w-sm rounded-lg shadow-lg sm:max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
}