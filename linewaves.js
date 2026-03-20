(function () {
  const root = document.getElementById("projects-linewaves");
  if (!root) {
    return;
  }

  const canvas = document.createElement("canvas");
  root.appendChild(canvas);

  const gl =
    canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false }) ||
    canvas.getContext("experimental-webgl", { alpha: true, antialias: true, premultipliedAlpha: false });

  if (!gl) {
    root.style.background =
      "radial-gradient(circle at center, rgba(47, 107, 255, 0.12), rgba(255,255,255,0.72) 54%, rgba(255,255,255,0) 78%)";
    return;
  }

  const vertexShaderSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = (aPosition + 1.0) * 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;

    varying vec2 vUv;

    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;

    float hashF(float n) {
      return fract(sin(n * 127.1) * 43758.5453123);
    }

    float smoothNoise(float x) {
      float i = floor(x);
      float f = fract(x);
      float u = f * f * (3.0 - 2.0 * f);
      return mix(hashF(i), hashF(i + 1.0), u);
    }

    float displaceA(float coord, float t) {
      float result = sin(coord * 2.123) * 0.2;
      result += sin(coord * 3.234 + t * 4.345) * 0.1;
      result += sin(coord * 0.589 + t * 0.934) * 0.5;
      return result;
    }

    float displaceB(float coord, float t) {
      float result = sin(coord * 1.345) * 0.3;
      result += sin(coord * 2.734 + t * 3.345) * 0.2;
      result += sin(coord * 0.189 + t * 0.934) * 0.3;
      return result;
    }

    vec2 rotate2D(vec2 p, float angle) {
      float c = cos(angle);
      float s = sin(angle);
      return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    }

    void main() {
      vec2 coords = gl_FragCoord.xy / uResolution.xy;
      coords = coords * 2.0 - 1.0;
      coords.x *= uResolution.x / max(uResolution.y, 1.0);
      coords = rotate2D(coords, -0.56);

      float speed = 0.32;
      float innerLines = 22.0;
      float outerLines = 30.0;
      float warpIntensity = 0.92;
      float edgeFadeWidth = 0.12;
      float brightness = 0.16;
      float colorCycleSpeed = 0.4;

      float halfT = uTime * speed * 0.5;
      float fullT = uTime * speed;

      vec2 mouse = uMouse * 2.0 - 1.0;
      mouse.x *= uResolution.x / max(uResolution.y, 1.0);
      mouse = rotate2D(mouse, -0.56);
      float mDist = length(coords - mouse);
      float mouseWarp = 0.55 * exp(-mDist * mDist * 3.5);

      float warpAx = coords.x + displaceA(coords.y, halfT) * warpIntensity + mouseWarp;
      float warpAy = coords.y - displaceA(coords.x * cos(fullT) * 1.235, halfT) * warpIntensity;
      float warpBx = coords.x + displaceB(coords.y, halfT) * warpIntensity + mouseWarp;
      float warpBy = coords.y - displaceB(coords.x * sin(fullT) * 1.235, halfT) * warpIntensity;

      vec2 fieldA = vec2(warpAx, warpAy);
      vec2 fieldB = vec2(warpBx, warpBy);
      vec2 blended = mix(fieldA, fieldB, 0.5);

      float fadeTop = smoothstep(edgeFadeWidth, edgeFadeWidth + 0.4, blended.y);
      float fadeBottom = smoothstep(-edgeFadeWidth, -(edgeFadeWidth + 0.4), blended.y);
      float vMask = 1.0 - max(fadeTop, fadeBottom);

      float tileCount = mix(outerLines, innerLines, vMask);
      float scaledY = blended.y * tileCount;
      float nY = smoothNoise(abs(scaledY));

      float ridge = pow(
        step(abs(nY - blended.x) * 2.0, 1.5707963) * cos(2.0 * (nY - blended.x)),
        5.0
      );

      float lines = 0.0;
      for (float i = 1.0; i < 3.0; i += 1.0) {
        lines += pow(max(fract(scaledY), fract(-scaledY)), i * 2.0);
      }

      float pattern = vMask * lines;
      float cycleT = fullT * colorCycleSpeed;

      vec3 color1 = vec3(0.15, 0.42, 1.0);
      vec3 color2 = vec3(0.76, 0.82, 1.0);
      vec3 color3 = vec3(1.0, 1.0, 1.0);

      float rChannel = (pattern + lines * ridge) * (cos(blended.y + cycleT * 0.234) * 0.5 + 1.0);
      float gChannel = (pattern + vMask * ridge) * (sin(blended.x + cycleT * 1.745) * 0.5 + 1.0);
      float bChannel = (pattern + lines * ridge) * (cos(blended.x + cycleT * 0.534) * 0.5 + 1.0);

      vec3 col = (rChannel * color1 + gChannel * color2 + bChannel * color3) * brightness;
      float alpha = clamp(length(col), 0.0, 1.0) * 0.9;

      gl_FragColor = vec4(col, alpha);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    if (!shader) {
      return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    return;
  }

  const program = gl.createProgram();
  if (!program) {
    return;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return;
  }

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  const aPosition = gl.getAttribLocation(program, "aPosition");
  const uTime = gl.getUniformLocation(program, "uTime");
  const uResolution = gl.getUniformLocation(program, "uResolution");
  const uMouse = gl.getUniformLocation(program, "uMouse");

  let mouseX = 0.5;
  let mouseY = 0.5;
  let targetX = 0.5;
  let targetY = 0.5;
  let rafId = 0;
  let visible = false;

  const resize = () => {
    const rect = root.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const render = (now) => {
    rafId = window.requestAnimationFrame(render);
    if (!visible) {
      return;
    }

    mouseX += (targetX - mouseX) * 0.045;
    mouseY += (targetY - mouseY) * 0.045;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(uTime, now * 0.001);
    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform2f(uMouse, mouseX, 1 - mouseY);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  const handleMove = (event) => {
    const rect = root.getBoundingClientRect();
    targetX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    targetY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  };

  const handleLeave = () => {
    targetX = 0.5;
    targetY = 0.5;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      visible = entry.isIntersecting;
    });
  });

  resize();
  observer.observe(root);
  root.addEventListener("pointermove", handleMove);
  root.addEventListener("pointerleave", handleLeave);
  window.addEventListener("resize", resize);
  rafId = window.requestAnimationFrame(render);

  window.addEventListener("beforeunload", () => {
    observer.disconnect();
    root.removeEventListener("pointermove", handleMove);
    root.removeEventListener("pointerleave", handleLeave);
    window.removeEventListener("resize", resize);
    window.cancelAnimationFrame(rafId);
  });
})();
