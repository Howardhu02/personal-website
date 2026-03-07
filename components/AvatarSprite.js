import React, { useEffect, useState } from "https://esm.sh/react@18.3.1";

const ALLOWED_ACTIONS = new Set(["idle", "coding", "coffee", "gym"]);

export default function AvatarSprite({ action, onMouseEnter, onMouseLeave }) {
  const safeAction = ALLOWED_ACTIONS.has(action) ? action : "idle";
  const [displayAction, setDisplayAction] = useState(safeAction);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (safeAction === displayAction) {
      return undefined;
    }

    setIsVisible(false);
    const timer = window.setTimeout(() => {
      setDisplayAction(safeAction);
      setIsVisible(true);
    }, 90);

    return () => window.clearTimeout(timer);
  }, [displayAction, safeAction]);

  return React.createElement("div", {
    className: `avatar avatar-${displayAction} ${isVisible ? "is-visible" : ""}`,
    onMouseEnter,
    onMouseLeave,
    role: "img",
    "aria-label": `Howard avatar ${displayAction} animation`,
  });
}
