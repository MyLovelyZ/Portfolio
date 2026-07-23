// Shows your projects as a row of cards that slide in horizontally — like a
// marquee train pulling in from the left — as the Projects section scrolls
// into view. The slide is driven directly by scroll position (not a timed
// animation), so the cards only move while the page is actually being
// scrolled, and reverse smoothly when scrolling back up.
//
// Project data comes from src/data/projects.js.

import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

// How far into the section's entrance (0 -> 1) the cards travel from their
// off-screen starting position to their resting position.
function useSectionScrollProgress(sectionRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 0 while the section is still below the viewport, 1 once its top has
      // scrolled up to roughly a third of the way down the viewport.
      const raw = (viewportHeight - rect.top) / (viewportHeight * 0.7);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionRef]);

  return progress;
}

export default function Projects() {
  const sectionRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const progress = useSectionScrollProgress(sectionRef);

  // Keep the motion preference in sync if the user changes it later
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="mx-auto px-6 py-24 bg-blue-900"
    >
      <h2 className="mb-8 text-2xl font-bold text-white text-center">
        <span className="text-white">Projects</span>
      </h2>

      {/* Cards stay centered as a group; once more than fit on one row,
          the rest wrap onto a centered row below. */}
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-10">
        {projects.map((project, index) => {
          // Each card starts its slide a little later than the one before
          // it, so they pull into place one after another, like train cars.
          const delay = Math.min(index * 0.08, 0.6);
          const cardProgress = Math.min(
            1,
            Math.max(0, (progress - delay) / (1 - delay))
          );

          return (
            <div
              key={project.title}
              className="w-56 shrink-0 overflow-hidden rounded-2xl border-4 border-blue-950 bg-white shadow-lg will-change-transform"
              style={
                reducedMotion
                  ? undefined
                  : {
                      transform: `translateX(${(1 - cardProgress) * -180}px)`,
                      opacity: cardProgress,
                    }
              }
            >
              {/* Image area */}
              <div className="flex h-36 items-center justify-center bg-gray-200">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-extrabold tracking-wide text-gray-700">
                    IMAGE
                  </span>
                )}
              </div>

              {/* Title + link */}
              <div className="flex flex-col items-center gap-3 px-4 py-5 text-center">
                <h3 className="text-lg font-bold text-blue-950">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-950 px-6 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  Go To
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
