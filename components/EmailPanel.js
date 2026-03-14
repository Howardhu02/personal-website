import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";

const TARGET_EMAIL = "howardhu@berkeley.edu";

export default function EmailPanel({ open, onClose }) {
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setIsSending(false);
    }
  }, [open]);

  const canSend = useMemo(() => {
    return fromEmail.trim().length > 3 && message.trim().length > 0 && !isSending;
  }, [fromEmail, message, isSending]);

  const handlePanelClick = (event) => {
    event.stopPropagation();
  };

  const handleSend = async () => {
    if (!canSend) {
      return;
    }

    setIsSending(true);

    const endpoint = window.EMAIL_PANEL_ENDPOINT;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: TARGET_EMAIL,
            from: fromEmail.trim(),
            message: message.trim(),
            source: "portfolio-email-panel",
          }),
        });

        if (response.ok) {
          setFromEmail("");
          setMessage("");
          onClose();
          return;
        }
      } catch (_error) {
        // fall back to mailto if endpoint is unavailable
      }
    }

    const subject = encodeURIComponent(`Portfolio message from ${fromEmail.trim()}`);
    const body = encodeURIComponent(`From: ${fromEmail.trim()}\n\n${message.trim()}`);
    window.open(`mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");

    setFromEmail("");
    setMessage("");
    setIsSending(false);
    onClose();
  };

  return React.createElement(
    "div",
    {
      className: `email-panel-overlay ${open ? "is-open" : ""}`,
      "aria-hidden": open ? "false" : "true",
      onClick: onClose,
    },
    React.createElement(
      "aside",
      {
        className: "email-panel",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Send email to Howard Hu",
        onClick: handlePanelClick,
      },
      React.createElement(
        "div",
        { className: "email-panel-head" },
        React.createElement("p", { className: "email-label" }, "To"),
        React.createElement("p", { className: "email-to" }, "Howard Hu")
      ),
      React.createElement(
        "label",
        { className: "email-field", htmlFor: "email-from-input" },
        React.createElement("span", { className: "email-label" }, "From"),
        React.createElement("input", {
          id: "email-from-input",
          type: "email",
          placeholder: "Enter your email address",
          value: fromEmail,
          onChange: (event) => setFromEmail(event.target.value),
          autoComplete: "email",
        })
      ),
      React.createElement(
        "label",
        { className: "email-field", htmlFor: "email-message-input" },
        React.createElement("span", { className: "email-label" }, "Message"),
        React.createElement("textarea", {
          id: "email-message-input",
          rows: 10,
          value: message,
          onChange: (event) => setMessage(event.target.value),
        })
      ),
      React.createElement(
        "div",
        { className: "email-actions" },
        React.createElement(
          "button",
          {
            type: "button",
            className: "email-send",
            disabled: !canSend,
            onClick: handleSend,
          },
          isSending ? "Sending..." : "Send Email"
        ),
        React.createElement(
          "button",
          {
            type: "button",
            className: "email-cancel",
            onClick: onClose,
          },
          "Cancel"
        )
      )
    )
  );
}
