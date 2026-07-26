import { useState } from "react";
import "../styles/media-showcase.css";

/**
 * MediaShowcase Component
 * A minimalist, layout-stable showcase component for displaying GIFs, videos,
 * and design process walkthroughs (e.g. minigame gameplay, layout design iterations).
 */
const MediaShowcase = ({ items = [], title = "Showcase & Process" }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!items || items.length === 0) return null;

  const currentItem = items[activeTab] || items[0];
  const {
    title: itemTitle,
    tag,
    src,
    poster,
    caption,
    type = "gif",
    aspectRatio = "16/9",
  } = currentItem;

  const handleTabChange = (index) => {
    setActiveTab(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const displaySrc = isPlaying ? src : poster || src;

  return (
    <div className="media-showcase-container">
      {title && <h3 className="media-showcase-header">{title}</h3>}

      {/* Tab Controls (Rendered if multiple media items exist) */}
      {items.length > 1 && (
        <div className="media-showcase-tabs" role="tablist">
          {items.map((item, index) => (
            <button
              key={item.id || index}
              className={`media-tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabChange(index)}
              role="tab"
              aria-selected={activeTab === index}
            >
              {item.title}
              {item.tag && <span className="media-tab-tag">{item.tag}</span>}
            </button>
          ))}
        </div>
      )}

      {/* Main Media Card */}
      <div className="media-showcase-card">
        {/* Media Frame with CSS Aspect-Ratio to prevent CLS */}
        <div
          className="media-frame"
          style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
        >
          {type === "video" ? (
            <video
              src={src}
              poster={poster}
              controls
              loop
              muted
              playsInline
              className="media-content"
            />
          ) : (
            <img
              src={displaySrc}
              alt={itemTitle || "Project showcase media"}
              className="media-content"
              loading="lazy"
              onError={(e) => {
                // Fallback to poster or generic placeholder if gif doesn't exist yet
                if (poster && e.target.src !== poster) {
                  e.target.src = poster;
                }
              }}
            />
          )}

          {/* Interactive Badges & Controls */}
          <div className="media-overlay-controls">
            {tag && <span className="media-tag-badge">{tag}</span>}

            {type === "gif" && poster && (
              <button
                className="media-control-btn"
                onClick={togglePlay}
                title={isPlaying ? "Pause GIF" : "Play GIF"}
                aria-label={isPlaying ? "Pause GIF" : "Play GIF"}
              >
                {isPlaying ? "⏸ PAUSE" : "▶ PLAY GIF"}
              </button>
            )}

            <button
              className="media-control-btn expand-btn"
              onClick={() => setIsModalOpen(true)}
              title="Expand view"
              aria-label="Expand view"
            >
              ⛶
            </button>
          </div>
        </div>

        {/* Caption & Metadata Footer */}
        {(itemTitle || caption) && (
          <div className="media-showcase-footer">
            {itemTitle && <h4 className="media-item-title">{itemTitle}</h4>}
            {caption && <p className="media-item-caption">{caption}</p>}
          </div>
        )}
      </div>

      {/* Expanded Lightbox Modal */}
      {isModalOpen && (
        <div
          className="media-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="media-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="media-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <div className="media-modal-body">
              {type === "video" ? (
                <video
                  src={src}
                  poster={poster}
                  controls
                  autoPlay
                  loop
                  className="modal-media"
                />
              ) : (
                <img
                  src={src}
                  alt={itemTitle || "Expanded showcase"}
                  className="modal-media"
                />
              )}
            </div>
            {caption && <p className="modal-caption">{caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaShowcase;
