import React, { useEffect, useMemo, useState } from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(React.createElement);

const spriteMap = {
  idle: 'public/avatars/howard_idle.png',
  smile: 'public/avatars/howard_smile.png',
  wave: 'public/avatars/howard_wave.png',
  laptop: 'public/avatars/howard_laptop.png',
  camera: 'public/avatars/howard_camera.png',
  poker: 'public/avatars/howard_poker.png',
};

const sectionPoseMap = [
  { id: 'hero-section', pose: 'idle' },
  { id: 'work', pose: 'wave' },
  { id: 'about', pose: 'smile' },
  { id: 'projects', pose: 'laptop' },
  { id: 'photography', pose: 'camera' },
  { id: 'hobbies', pose: 'poker' },
];

function SpriteFrame({ pose, visible }) {
  const src = spriteMap[pose] || spriteMap.idle;

  return html`
    <img
      className=${`avatar-sprite ${visible ? 'is-visible' : ''}`}
      src=${src}
      alt=""
      width="128"
      height="128"
      aria-hidden="true"
    />
  `;
}

export function HowardAvatar({ pose = 'idle', label = 'Howard', hoverWave = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const effectivePose = isHovered && hoverWave && pose === 'idle' ? 'wave' : pose;
  const [displayPose, setDisplayPose] = useState(effectivePose);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (effectivePose === displayPose) {
      return undefined;
    }

    setIsVisible(false);
    const timer = window.setTimeout(() => {
      setDisplayPose(effectivePose);
      setIsVisible(true);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [effectivePose, displayPose]);

  return html`
    <div
      className="avatar-shell"
      onMouseEnter=${() => setIsHovered(true)}
      onMouseLeave=${() => setIsHovered(false)}
      role="img"
      aria-label=${`${label} avatar in ${displayPose} pose`}
    >
      <${SpriteFrame} pose=${displayPose} visible=${isVisible} />
    </div>
  `;
}

function useActiveHeroPose() {
  const [pose, setPose] = useState('idle');

  useEffect(() => {
    const sectionStates = new Map();
    const sections = sectionPoseMap
      .map((entry) => ({ ...entry, element: document.getElementById(entry.id) }))
      .filter((entry) => entry.element);

    if (!sections.length) {
      return undefined;
    }

    const pickActiveSection = () => {
      const visible = sections
        .map((entry) => ({
          pose: entry.pose,
          ratio: sectionStates.get(entry.id) ?? 0,
        }))
        .filter((entry) => entry.ratio > 0);

      if (!visible.length) {
        setPose('idle');
        return;
      }

      visible.sort((a, b) => b.ratio - a.ratio);
      setPose(visible[0].pose);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionStates.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        pickActiveSection();
      },
      {
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75],
        rootMargin: '-18% 0px -28% 0px',
      }
    );

    sections.forEach((entry) => observer.observe(entry.element));
    return () => observer.disconnect();
  }, []);

  return pose;
}

function DynamicAvatar({ label }) {
  const pose = useActiveHeroPose();
  return html`<${HowardAvatar} pose=${pose} label=${label} hoverWave=${true} />`;
}

function mountAvatar(slot) {
  const mode = slot.dataset.avatarMode || 'static';
  const label = slot.dataset.avatarLabel || 'Howard';
  const pose = slot.dataset.avatarPose || 'idle';
  const root = createRoot(slot);

  if (mode === 'dynamic') {
    root.render(html`<${DynamicAvatar} label=${label} />`);
    return;
  }

  root.render(html`<${HowardAvatar} pose=${pose} label=${label} />`);
}

document.querySelectorAll('.avatar-slot').forEach((slot) => mountAvatar(slot));
