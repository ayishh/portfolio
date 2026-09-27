// Shared skill cards used by SkillsSection. Content comes from src/data/skill.js.
// This is the current Soft UI grid; it no longer uses the old spotlight animation.
import "./ChromaGrid.css";
export const ChromaGrid = ({ items = [], className = "" }) => (
  <div className={"chroma-grid " + className}>
    {items.map((item) => {
      // A URL makes the card a keyboard-accessible link. Otherwise it is a plain card.
      const Tag = item.url ? "a" : "div";
      return (
        <Tag
          key={item.title}
          className="chroma-card surface"
          {...(item.url
            ? {
                href: item.url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label":
                  item.title + " documentation (opens in a new tab)",
              }
            : {})}
        >
          <div className="chroma-img-wrapper">
            {item.image ? (
              <img
                src={item.image}
                alt=""
                width="48"
                height="48"
                loading="lazy"
              />
            ) : (
              <span>{item.title.charAt(0)}</span>
            )}
          </div>
          <div className="chroma-info">
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
          {item.url && (
            <span className="skill-arrow" aria-hidden="true">
              &#8599;
            </span>
          )}
        </Tag>
      );
    })}
  </div>
);
export default ChromaGrid;
