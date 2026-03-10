import React, { useEffect, useRef, useState } from "https://esm.sh/react@18.3.1";
import AvatarSprite from "./AvatarSprite.js?v=20260310-1";

const RANDOM_ACTIONS = ["coffee", "gym", "coding"];

export default function AvatarController() {
  const [action, setAction] = useState("idle");
  const timeoutRef = useRef(null);

  const clearPendingTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const playTemporaryAction = (nextAction, durationMs) => {
    clearPendingTimeout();
    setAction(nextAction);
    timeoutRef.current = window.setTimeout(() => {
      setAction("idle");
      timeoutRef.current = null;
    }, durationMs);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const nextAction = RANDOM_ACTIONS[Math.floor(Math.random() * RANDOM_ACTIONS.length)];
      playTemporaryAction(nextAction, 2400);
    }, 15000);

    return () => {
      window.clearInterval(intervalId);
      clearPendingTimeout();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() !== "j") {
        return;
      }
      playTemporaryAction("coding", 5000);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectAction = (nextAction) => {
    clearPendingTimeout();
    setAction(nextAction);
  };

  const controls = [
    { action: "coding", label: "💻 Code" },
    { action: "coffee", label: "☕ Coffee" },
    { action: "gym", label: "🏋️ Gym" },
    { action: "idle", label: "😴 Idle" },
  ];

  return React.createElement(
    "div",
    { className: "avatar-card" },
    React.createElement(AvatarSprite, {
      action,
      onMouseEnter: () => selectAction("coding"),
      onMouseLeave: () => selectAction("idle"),
    }),
    React.createElement(
      "div",
      { className: "avatar-controls" },
      ...controls.map((control) =>
        React.createElement(
          "button",
          {
            key: control.action,
            type: "button",
            className: action === control.action ? "is-active" : "",
            onClick: () => selectAction(control.action),
          },
          control.label
        )
      )
    )
  );
}
