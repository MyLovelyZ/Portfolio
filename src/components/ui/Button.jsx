// Props:
//  - href:     where the link goes
//  - children: the text/content inside the button
//  - variant:  "primary" (filled) or "outline" (bordered). Defaults to primary.
//  - ...rest:  any other props (like target="_blank") get passed through.

const styles = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500",
  outline:
    "border border-gray-700 text-gray-700 hover:text-gray-200 hover:bg-gray-800",
};

export default function Button({ href, children, variant = "primary", ...rest }) {
  return (
    <a
      href={href}
      className={`inline-block rounded-lg px-6 py-3 font-medium transition-colors ${styles[variant]}`}
      {...rest}
    >
      {children}
    </a>
  );
}
