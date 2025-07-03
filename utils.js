const hex2rgb = (hex) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

const rgb2hex = ([r, g, b]) =>
  `#${Number(Math.round(r)).toString(16).padStart(2, "0")}${Number(
    Math.round(g)
  )
    .toString(16)
    .padStart(2, "0")}${Number(Math.round(b)).toString(16).padStart(2, "0")}`;

const rgb2hsl = ([r, g, b]) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) h = s = 0;
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [
    Math.round(h * 3600) / 10,
    Math.round(s * 1000) / 10,
    Math.round(l * 1000) / 10,
  ];
};

const hsl2rgb = ([h, s, l]) => {
  h /= 360;
  s /= 100;
  l /= 100;
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) r = g = b = l;
  else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [r, g, b].map((x) => Math.round(x * 255));
};

const hsl2hex = ([h, s, l]) => {
  return rgb2hex(hsl2rgb([h, s, l]));
};

const hex2hsl = (hex) => {
  return rgb2hsl(hex2rgb(hex));
};

const saturate = (amount, hex) => {
  let [h, s, l] = rgb2hsl(hex2rgb(hex));
  s = Math.min(100, s + amount);
  return rgb2hex(hsl2rgb([h, s, l]));
};

const desaturate = (amount, hex) => {
  let [h, s, l] = rgb2hsl(hex2rgb(hex));
  s = Math.max(0, s - amount);
  return rgb2hex(hsl2rgb([h, s, l]));
};

const brighten = (amount, hex) => {
  let [h, s, l] = rgb2hsl(hex2rgb(hex));
  l = Math.min(100, l + amount);
  return rgb2hex(hsl2rgb([h, s, l]));
};

const darken = (amount, hex) => {
  let [h, s, l] = rgb2hsl(hex2rgb(hex));
  l = Math.max(0, l - amount);
  return rgb2hex(hsl2rgb([h, s, l]));
};

const dhsl = ([dh, ds, dl], hex) => {
  let [h, s, l] = rgb2hsl(hex2rgb(hex));
  if (dh != null) h = dh > 0 ? Math.min(360, h + dh) : Math.max(0, h + dh);
  if (ds != null) s = ds > 0 ? Math.min(100, s + ds) : Math.max(0, s + ds);
  if (dl != null) l = dl > 0 ? Math.min(100, l + dl) : Math.max(0, l + dl);
  return rgb2hex(hsl2rgb([h, s, l]));
};

const ahsl = ([ah, as, al], hex) => {
  let [h, s, l] = rgb2hsl(hex2rgb(hex));
  if (ah != null) h = Math.min(360, Math.max(0, ah));
  if (as != null) s = Math.min(100, Math.max(0, as));
  if (al != null) l = Math.min(100, Math.max(0, al));
  return rgb2hex(hsl2rgb([h, s, l]));
};

module.exports = {
  hex2rgb,
  rgb2hex,
  rgb2hsl,
  hsl2rgb,
  hsl2hex,
  hex2hsl,
  saturate,
  desaturate,
  brighten,
  darken,
  dhsl,
  ahsl,
};
