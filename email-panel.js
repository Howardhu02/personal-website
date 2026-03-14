import React, { useCallback, useEffect, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import htm from "https://esm.sh/htm@3.1.1";
import EmailPanel from "./components/EmailPanel.js?v=20260314-1";

const html = htm.bind(React.createElement);

function EmailPanelApp() {
  const [open, setOpen] = useState(false);

  const closePanel = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const trigger = document.getElementById("email-open-trigger");
    if (!trigger) {
      return undefined;
    }

    const handleOpen = () => setOpen(true);
    trigger.addEventListener("click", handleOpen);

    return () => trigger.removeEventListener("click", handleOpen);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("email-panel-open", open);
    return () => document.body.classList.remove("email-panel-open");
  }, [open]);

  return html`<${EmailPanel} open=${open} onClose=${closePanel} />`;
}

const mountNode = document.getElementById("email-panel-root");
if (mountNode) {
  const root = createRoot(mountNode);
  root.render(html`<${EmailPanelApp} />`);
}
