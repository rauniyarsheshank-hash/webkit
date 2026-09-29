function Canva({ tools, classMap }) {
  function renderItems(items) {
    return items.map((item) => {
      const className =
        classMap?.[item.id] ||
        `canvas-${item.type}`;

      // Apply saved CSS directly
      const style = item.css || {};

      // =====================================================
      // CONTAINER / DIV
      // =====================================================

      if (item.type === "container") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
          >
            {/* Editable content between <div> tags */}
            {item.content && (
              <div className="container-content">
                {item.content}
              </div>
            )}

            {/* Child components */}
            <div className="container-children">
              {renderItems(item.children || [])}
            </div>
          </div>
        );
      }

      // =====================================================
      // BUTTON
      // =====================================================

      if (item.type === "button") {
        return (
          <button
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </button>
        );
      }

      // =====================================================
      // ICON BUTTON
      // =====================================================

      if (item.type === "iconButton") {
        return (
          <button
            key={item.id}
            className={className}
            style={style}
            aria-label={item.name}
          >
            {item.text}
          </button>
        );
      }

      // =====================================================
      // LINK
      // =====================================================

      if (item.type === "link") {
        return (
          <a
            key={item.id}
            className={className}
            style={style}
            href={item.href || "#"}
            onClick={(event) => {
              if (
                !item.href ||
                item.href === "#"
              ) {
                event.preventDefault();
              }
            }}
          >
            {item.text}
          </a>
        );
      }

      // =====================================================
      // TEXT
      // =====================================================

      if (item.type === "text") {
        return (
          <p
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </p>
        );
      }

      // =====================================================
      // HEADING
      // =====================================================

      if (item.type === "heading") {
        return (
          <h2
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </h2>
        );
      }

      // =====================================================
      // PARAGRAPH
      // =====================================================

      if (item.type === "paragraph") {
        return (
          <p
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </p>
        );
      }

      // =====================================================
      // LABEL
      // =====================================================

      if (item.type === "label") {
        return (
          <label
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </label>
        );
      }

      // =====================================================
      // ICON
      // =====================================================

      if (item.type === "icon") {
        return (
          <span
            key={item.id}
            className={className}
            style={style}
            aria-hidden="true"
          >
            {item.text}
          </span>
        );
      }

      // =====================================================
      // IMAGE
      // =====================================================

      if (item.type === "image") {
        return (
          <img
            key={item.id}
            className={className}
            style={style}
            src={
              item.src ||
              "https://via.placeholder.com/240x160"
            }
            alt={item.name}
          />
        );
      }

      // =====================================================
      // AVATAR
      // =====================================================

      if (item.type === "avatar") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </div>
        );
      }

      // =====================================================
      // BADGE
      // =====================================================

      if (item.type === "badge") {
        return (
          <span
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </span>
        );
      }

      // =====================================================
      // TAG
      // =====================================================

      if (item.type === "tag") {
        return (
          <span
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </span>
        );
      }

      // =====================================================
      // CHIP
      // =====================================================

      if (item.type === "chip") {
        return (
          <span
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </span>
        );
      }

      // =====================================================
      // DIVIDER
      // =====================================================

      if (item.type === "divider") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
            role="separator"
          />
        );
      }

      // =====================================================
      // SEPARATOR
      // =====================================================

      if (item.type === "separator") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
            role="separator"
          />
        );
      }

      // =====================================================
      // SPACER
      // =====================================================

      if (item.type === "spacer") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
            aria-hidden="true"
          />
        );
      }

      // =====================================================
      // TOOLTIP
      // =====================================================

      if (item.type === "tooltip") {
        return (
          <span
            key={item.id}
            className={className}
            style={style}
            title={item.text}
          >
            {item.text}
          </span>
        );
      }

      // =====================================================
      // SPINNER
      // =====================================================

      if (item.type === "spinner") {
        return (
          <span
            key={item.id}
            className={className}
            style={style}
            role="status"
            aria-label="Loading"
          />
        );
      }

      // =====================================================
      // LOADER
      // =====================================================

      if (item.type === "loader") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
            role="progressbar"
          >
            {item.text}
          </div>
        );
      }

      // =====================================================
      // PROGRESS BAR
      // =====================================================

      if (item.type === "progressBar") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="60"
          >
            <div
              className="canvas-progress-value"
              style={{
                width: "60%",
                height: "100%",
                background: "#4C43E0",
                borderRadius: "inherit",
              }}
            >
              {item.text}
            </div>
          </div>
        );
      }

      // =====================================================
      // SKELETON
      // =====================================================

      if (item.type === "skeleton") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
            aria-hidden="true"
          />
        );
      }

      // =====================================================
      // INPUT
      // =====================================================

      if (item.type === "input") {
        return (
          <input
            key={item.id}
            className={className}
            style={style}
            placeholder={
              item.text ||
              "Enter text..."
            }
          />
        );
      }

      // =====================================================
      // SELECT
      // =====================================================

      if (item.type === "select") {
        return (
          <select
            key={item.id}
            className={className}
            style={style}
          >
            <option>
              {item.text ||
                "Select an option"}
            </option>

            <option>
              Option 2
            </option>

            <option>
              Option 3
            </option>
          </select>
        );
      }

      // =====================================================
      // CHECKBOX
      // =====================================================

      if (item.type === "checkbox") {
        return (
          <input
            key={item.id}
            type="checkbox"
            className={className}
            style={style}
          />
        );
      }

      // =====================================================
      // CARD
      // =====================================================

      if (item.type === "card") {
        return (
          <div
            key={item.id}
            className={className}
            style={style}
          >
            {item.text}
          </div>
        );
      }

      return null;
    });
  }

  return (
    <div className="canvas">
      {renderItems(tools)}
    </div>
  );
}

export default Canva;