import { SITE } from "../constants";

export default function About() {
  return (
    <section id="about" className="mx-auto px-6 py-24 bg-blue-900 items-center flex">
      <div className="space-y-4 text-gray-300">
        <h2 className="mb-8 text-2xl font-bold text-white">
          About Me
        </h2>
        <p>
          Hi, I’m {SITE.fullname}, you can call me {SITE.name}. I am a vocational high school student with a strong interest in {SITE.hobby}.
          Over the past 3 years, I have immersed myself in the world of programming and worked on a variety of projects—ranging from blablabla. I truly enjoy the process of solving complex problems and transforming them into clean, efficient, and maintainable code.
          I believe that great technology is technology that simplifies users' lives. That is why, in my work, I focus not only on technical aspects but also on the user experience when interacting with the products I build. Some of the tech stacks and tools I use daily include [mention key technologies, e.g., React.js, Node.js, Python, and Git].
          The tech industry moves fast, and that is exactly what I love about it. I am constantly motivated to keep learning, update my skills, and adapt to the latest trends in order to deliver the best possible results.
          Interested in discussing new projects, job opportunities, or technical collaborations? Please feel free to contact me via email or LinkedIn.
        </p>
        <p>
          I care about writing code that's easy to read, layouts that work on
          any screen size, and small details that make an interface feel
          polished.
        </p>
      </div>
    </section>
  );
}
