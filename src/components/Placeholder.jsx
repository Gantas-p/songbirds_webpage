// A soft placeholder that sits where a photo will go. Replace each use with a
// real <img> when you have pictures (see CONTENT.md). It is decorative, so it
// is hidden from screen readers.
export default function Placeholder({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div
      className={`placeholder ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      aria-hidden="true"
    >
      <span className="placeholder__mark" />
      <span className="placeholder__label">{label}</span>
    </div>
  )
}
