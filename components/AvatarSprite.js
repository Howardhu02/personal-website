import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";

const ALLOWED_ACTIONS = new Set(["idle", "coding", "coffee", "gym"]);
const BASE = "/public/avatar";
const FRAME_GROUPS = {
  idle: [
    `${BASE}/idle/1.png`,
    `${BASE}/idle/2.png`,
    `${BASE}/idle/3.png`,
    `${BASE}/idle/4.png`,
    `${BASE}/idle/5.png`,
    `${BASE}/idle/idle.png`,
  ],
  coding: [
    `${BASE}/coding/1.png`,
    `${BASE}/coding/2.png`,
    `${BASE}/coding/3.png`,
    `${BASE}/coding/4.png`,
    `${BASE}/coding/5.png`,
  ],
  coffee: [
    `${BASE}/coffee/1.png`,
    `${BASE}/coffee/2.png`,
    `${BASE}/coffee/3.png`,
    `${BASE}/coffee/4.png`,
    `${BASE}/coffee/5.png`,
  ],
  gym: [
    `${BASE}/gym/1.png`,
    `${BASE}/gym/2.png`,
    `${BASE}/gym/3.png`,
    `${BASE}/gym/4.png`,
    `${BASE}/gym/5.png`,
  ],
};
const FALLBACK_FRAME = `${BASE}/idle/idle.png`;
const FRAME_MS = 180;

export default function AvatarSprite({ action, onMouseEnter, onMouseLeave }) {
  const safeAction = ALLOWED_ACTIONS.has(action) ? action : "idle";
  const [displayAction, setDisplayAction] = useState(safeAction);
  const [isVisible, setIsVisible] = useState(true);
  const [frameIndex, setFrameIndex] = useState(0);
  const [failedFrames, setFailedFrames] = useState(() => new Set());

  const availableFrames = useMemo(() => {
    const candidates = FRAME_GROUPS[displayAction] || FRAME_GROUPS.idle;
    const filtered = candidates.filter((src) => !failedFrames.has(src));
    return filtered.length ? filtered : [FALLBACK_FRAME];
  }, [displayAction, failedFrames]);

  const currentFrame = availableFrames[frameIndex % availableFrames.length];

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

  useEffect(() => {
    setFrameIndex(0);
  }, [displayAction]);

  useEffect(() => {
    if (availableFrames.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setFrameIndex((previous) => (previous + 1) % availableFrames.length);
    }, FRAME_MS);

    return () => window.clearInterval(timer);
  }, [availableFrames]);

  return React.createElement(
    "div",
    {
      className: `avatar ${isVisible ? "is-visible" : ""}`,
      onMouseEnter,
      onMouseLeave,
      role: "img",
      "aria-label": `Howard avatar ${displayAction} animation`,
    },
    React.createElement("img", {
      className: "avatar-frame",
      src: currentFrame,
      alt: "",
      width: 128,
      height: 128,
      draggable: false,
      onError: () => {
        setFailedFrames((previous) => new Set(previous).add(currentFrame));
      },
    })
  );
}
