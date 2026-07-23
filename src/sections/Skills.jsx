// Shows your skills as a simple list. Clicking a skill underlines it and
// reveals a short "journey" note below — when you started and where
// you're at with it now, plus any projects/certificate if you have them.
// Skill data lives in src/data/skills.js.
//
// Rows also slide in/out as they cross the viewport while scrolling:
// alternating rows enter from the left and from the right, and the side
// flips when the user scrolls back up, so the animation mirrors itself
// on the way out.

import { useEffect, useRef, useState } from "react";
import { skills } from "../data/skills";

// Tracks whether the page is currently being scrolled down or up.
function useScrollDirection() {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 4) {
        setDirection(y > lastY ? "down" : "up");
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}

export default function Skills() {
  // Which skill is expanded right now (null = none)
  const [activeSkill, setActiveSkill] = useState(null);
  // Indexes of the rows currently inside the viewport
  const [visible, setVisible] = useState(() => new Set());
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const itemRefs = useRef([]);
  const scrollDirection = useScrollDirection();

  // Collapse the open skill when the user presses Escape
  useEffect(() => {
    if (!activeSkill) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveSkill(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSkill]);

  // Keep the motion preference in sync if the user changes it later
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Slide each row in as it enters the viewport, and back out as it leaves
  useEffect(() => {
    if (reducedMotion) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const index = Number(entry.target.dataset.index);
            if (entry.isIntersecting) next.add(index);
            else next.delete(index);
          });
          return next;
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl overflow-x-clip px-6 py-24"
    >
      <h2 className="mb-8 text-2xl font-bold text-blue-950">
        <span className="text-indigo-500">Skills</span>
      </h2>

      {/* The list of skills */}
      <ul>
        {skills.map((skill, index) => {
          // Rows alternate which side they slide in from. Scrolling up
          // flips the side, so the exit/entry mirrors the scroll-down pass.
          const baseSide = index % 2 === 0 ? -1 : 1;
          const side = scrollDirection === "down" ? baseSide : -baseSide;
          const isVisible = visible.has(index);
          const isOpen = activeSkill?.name === skill.name;

          return (
            <li
              key={skill.name}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              style={
                reducedMotion
                  ? undefined
                  : {
                      transform: isVisible
                        ? "translateX(0)"
                        : `translateX(${side * 80}px)`,
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${(index % 5) * 60}ms`,
                    }
              }
              className="border-b border-gray-200 transition-[transform,opacity] duration-700 ease-out will-change-transform"
            >
              <button
                type="button"
                onClick={() => setActiveSkill(isOpen ? null : skill)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-baseline gap-3 py-3 text-left"
              >
                <span className="text-indigo-500">-</span>
                <span
                  className={`text-lg font-medium text-gray-700 underline-offset-4 decoration-indigo-500 transition-colors hover:text-blue-950 ${
                    isOpen ? "text-blue-950 underline" : ""
                  }`}
                >
                  {skill.name}
                </span>
              </button>

              {isOpen && (
                <div className="animate-fade-up mb-4 ml-6 max-w-2xl motion-reduce:animate-none">
                  <p className="text-sm text-gray-600">
                    Started learning {skill.name} in {skill.started}.{" "}
                    {skill.description}
                  </p>

                  {skill.projects.length > 0 && (
                    <p className="mt-2 text-sm text-gray-500">
                      Used in{" "}
                      {skill.projects.map((project, i) => (
                        <span key={project.title}>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-indigo-600 hover:text-indigo-500"
                          >
                            {project.title}
                          </a>
                          {i < skill.projects.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      .
                    </p>
                  )}

                  {skill.certificate && (
                    <a
                      href={skill.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      View certificate →
                    </a>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
