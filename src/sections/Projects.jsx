// Shows your projects in a grid of cards.
// Project data comes from src/data/projects.js; the Card UI comes from components.

import Card from "../components/ui/Card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-8 text-2xl font-bold text-white">
        <span className="text-indigo-500">03.</span> Projects
      </h2>

      {/* Responsive grid: 1 column on mobile, 2 on small, 3 on large screens */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>

            <p className="mt-2 flex-1 text-sm text-gray-400">
              {project.description}
            </p>

            {/* The tags for this project */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-indigo-400">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              View project →
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
