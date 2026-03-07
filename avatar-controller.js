import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import htm from "https://esm.sh/htm@3.1.1";
import AvatarController from "./components/AvatarController.js";

const html = htm.bind(React.createElement);

const mountNode = document.getElementById("hero-avatar-controller");
if (mountNode) {
  const root = createRoot(mountNode);
  root.render(html`<${AvatarController} />`);
}
