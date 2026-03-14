import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";

const TARGET_EMAIL = "howardhu@berkeley.edu";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_LANG = "portfolio_lang";

const I18N = {
  en: {
    to: "To",
    from: "From",
    message: "Message",
    placeholder: "Enter your email address",
    send: "Send Email",
    sending: "Sending...",
    sent: "Sent",
    cancel: "Cancel",
    invalidEmail: "Please enter a valid email address.",
    emptyMessage: "Please enter a message.",
    notConfigured: "Email service is not configured yet.",
    failed: "Failed to send, try again.",
    dialogAria: "Send email to Howard Hu",
  },
  zh: {
    to: "收件人",
    from: "你的邮箱",
    message: "内容",
    placeholder: "请输入你的邮箱地址",
    send: "发送邮件",
    sending: "发送中...",
    sent: "已发送",
    cancel: "取消",
    invalidEmail: "请输入有效的邮箱地址。",
    emptyMessage: "请输入消息内容。",
    notConfigured: "邮件服务尚未配置。",
    failed: "发送失败，请重试。",
    dialogAria: "向 Howard Hu 发送邮件",
  },
  ko: {
    to: "받는 사람",
    from: "보내는 이메일",
    message: "메시지",
    placeholder: "이메일 주소를 입력하세요",
    send: "이메일 보내기",
    sending: "전송 중...",
    sent: "전송됨",
    cancel: "취소",
    invalidEmail: "유효한 이메일 주소를 입력하세요.",
    emptyMessage: "메시지를 입력하세요.",
    notConfigured: "이메일 서비스가 아직 설정되지 않았습니다.",
    failed: "전송에 실패했습니다. 다시 시도하세요.",
    dialogAria: "Howard Hu에게 이메일 보내기",
  },
};

export default function EmailPanel({ open, onClose }) {
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState("idle");
  const [errorText, setErrorText] = useState("");
  const [language, setLanguage] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_LANG) || "en";
    return I18N[stored] ? stored : "en";
  });

  const copy = I18N[language] || I18N.en;

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

  useEffect(() => {
    const handleLangChange = (event) => {
      const next = event.detail && event.detail.language ? event.detail.language : window.localStorage.getItem(STORAGE_LANG) || "en";
      if (I18N[next]) {
        setLanguage(next);
      }
    };

    window.addEventListener("portfolio-language-change", handleLangChange);
    return () => window.removeEventListener("portfolio-language-change", handleLangChange);
  }, []);

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
        setErrorText(copy.invalidEmail);
      } else if (!message.trim()) {
        setSendState("error");
        setErrorText(copy.emptyMessage);
      }
      return;
    }

    setSendState("loading");
    setErrorText("");

    const endpoint = window.EMAIL_PANEL_ENDPOINT || "";
    if (!endpoint) {
      setSendState("error");
      setErrorText(copy.notConfigured);
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
      setErrorText(copy.failed);
    }
  };

  const sendButtonContent =
    sendState === "loading"
      ? React.createElement(
          React.Fragment,
          null,
          React.createElement("span", { className: "email-spinner", "aria-hidden": "true" }),
          copy.sending
        )
      : sendState === "success"
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement("span", { className: "email-checkmark", "aria-hidden": "true" }, "✓"),
            copy.sent
          )
        : copy.send;

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
        "aria-label": copy.dialogAria,
        onClick: handlePanelClick,
      },
      React.createElement(
        "div",
        { className: "email-panel-head" },
        React.createElement("p", { className: "email-label" }, copy.to),
        React.createElement("p", { className: "email-to" }, "Howard Hu")
      ),
      React.createElement(
        "label",
        { className: "email-field", htmlFor: "email-from-input" },
        React.createElement("span", { className: "email-label" }, copy.from),
        React.createElement("input", {
          id: "email-from-input",
          type: "email",
          placeholder: copy.placeholder,
          value: fromEmail,
          onChange: (event) => setFromEmail(event.target.value),
          autoComplete: "email",
        })
      ),
      React.createElement(
        "label",
        { className: "email-field", htmlFor: "email-message-input" },
        React.createElement("span", { className: "email-label" }, copy.message),
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
          copy.cancel
        )
      ),
      sendState === "error" && errorText
        ? React.createElement("p", { className: "email-error", role: "status" }, errorText)
        : null
    )
  );
}
