import { skills } from "../data/skills";

export default function SkillMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-900/20 py-4">
      <div className="flex w-max animate-marquee gap-3">

        <ul className="flex gap-3 shrink-0">
          {skills.map((skill, index) => (
            <li
              key={`set1-${index}`}
              className="rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-gray-300 whitespace-nowrap"
            >
              {skill}
            </li>
          ))}
        </ul>

        <ul className="flex gap-3 shrink-0" aria-hidden="true">
          {skills.map((skill, index) => (
            <li
              key={`set2-${index}`}
              className="rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-gray-300 whitespace-nowrap"
            >
              {skill}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
