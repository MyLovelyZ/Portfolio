// A reusable styled container ("card").
//
// Anything you put between <Card>...</Card> shows up inside `children`.
// We keep the styling here so every card across the site looks consistent.
//
// Props:
//  - children:  the content shown inside the card
//  - className: optional extra classes if one card needs tweaking

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-gray-700 bg-blue-950 p-6 transition-colors hover:border-indigo-500 ${className}`}
    >
      {children}
    </div>
  );
}
