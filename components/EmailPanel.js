import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";

const TARGET_EMAIL = "howardhu@berkeley.edu";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailPanel({ open, onClose }) {
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState("idle"); // idle | loading | success | error
  const [errorText, setErrorText] = useState("");

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
      setSendState("idle");
      setErrorText("");
    }
  }, [open]);

  useEffect(() => {
    if (sendState === "error") {
      setSendState("idle");
      setErrorText("");
    }
  }, [fromEmail, message]);

  const canSend = useMemo(() => {
    return EMAIL_REGEX.test(fromEmail.trim()) && message.trim().length > 0 && sendState !== "loading";
  }, [fromEmail, message, sendState]);

  const handlePanelClick = (event) => {
    event.stopPropagation();
  };

  const handleSend = async () => {
    if (!canSend) {
      if (!EMAIL_REGEX.test(fromEmail.trim())) {
        setSendState("error");
        setErrorText("Please enter a valid email address.");
      } else if (!message.trim()) {
        setSendState("error");
        setErrorText("Please enter a message.");
      }
      return;
    }

    setSendState("loading");
    setErrorText("");

    const endpoint = window.EMAIL_PANEL_ENDPOINT || "";
    if (!endpoint) {
      setSendState("error");
      setErrorText("Email service is not configured yet.");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          to: TARGET_EMAIL,
          email: fromEmail.trim(),
          from: fromEmail.trim(),
          message: message.trim(),
          _subject: `Portfolio message from ${fromEmail.trim()}`,
          source: "portfolio-email-panel",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSendState("success");
      window.setTimeout(() => {
        setFromEmail("");
        setMessage("");
        setSendState("idle");
        onClose();
      }, 1000);
    } catch (_error) {
      setSendState("error");
      setErrorText("Failed to send, try again.");
    }
  };

  const sendButtonContent =
    sendState === "loading"
      ? React.createElement(
          React.Fragment,
          null,
          React.createElement("span", { className: "email-spinner", "aria-hidden": "true" }),
          "Sending..."
        )
      : sendState === "success"
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement("span", { className: "email-checkmark", "aria-hidden": "true" }, "✓"),
            "Sent"
          )
        : "Send Email";

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
            className: `email-send is-${sendState}`,
            disabled: sendState === "loading",
            onClick: handleSend,
          },
          sendButtonContent
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
      ),
      sendState === "error" && errorText
        ? React.createElement("p", { className: "email-error", role: "status" }, errorText)
        : null
    )
  );
}
