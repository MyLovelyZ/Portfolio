// A short "about me" block.

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      {/* A small reusable heading pattern: number + title + line */}
      <h2 className="mb-8 text-2xl font-bold text-white">
        <span className="text-indigo-500">01.</span> About Me
      </h2>

      <div className="space-y-4 text-gray-400">
        <p>
          Hello! I'm a developer who enjoys turning ideas into things you can
          click and use. I'm currently learning how modern web apps are built
          with React, and I made this portfolio as part of that journey.
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
