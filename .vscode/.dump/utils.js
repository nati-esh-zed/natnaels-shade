const _colorHue = (c0, c1, offset) => {
  const h = c0 >= c1 ? -60 * c0 : 60 * c1;
  const hv = h + offset;
  const hf = hv < 0 ? 360 - hv : hv > 360 ? hv - 360 : hv;
  // console.log(c0.toFixed(1), c1.toFixed(1), offset, hf.toFixed(1));
  return hf; //(h + offset) % 361;
};

const _rgb2hsl = ([r, g, b]) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  const l = (max / 255) * 50;
  const s = (1 - min / 255 / ((l * 2) / 100)) * 100;
  // min = (1 - s) * Math.min(1, l * 2) * 255;
  // min / 255 = (1 - s) * Math.min(1, l * 2);
  // min / 255 / (l * 2) = (1 - s);
  // s = (1 - min / 255 / (l * 2));
  if (max > min) {
    const sr = (r - min) / delta;
    const sg = (g - min) / delta;
    const sb = (b - min) / delta;
    switch (max) {
      case r:
        h = _colorHue(sb, sg, 0);
        break;
      case g:
        h = _colorHue(sr, sb, 120);
        break;
      case b:
        h = _colorHue(sg, sr, 240);
        break;
    }
  }
  return [
    Math.round(h * 10) / 10,
    Math.round(s * 10) / 10,
    Math.round(l * 10) / 10,
  ];
};

const _hueValue = (h, offset) => {
  h = h - offset;
  if (h >= -120 && h <= 120) {
    const hv = Math.abs(h);
    const cv = hv <= 60 ? 255 : 255 - ((hv - 60) / 60) * 255;
    return cv;
  }
  return 0;
};

// H   R    G    B
// 0   255  0    0
// 60  255  255  0
// 120 0    255  0
// 180 0    255  255
// 240 0    0    255
// 300 255  0    255
// 360 255  0    0

// const hsl2rgb = ([h, s, l]) => {
//   s /= 100;
//   l /= 100;
//   let r;
//   let g;
//   let b;

//   if (s === 0) {
//     r = g = b = Math.min(1, l * 2) * 255;
//   } else {
//     r = _hueValue(h, 0);
//     g = _hueValue(h, 120);
//     b = _hueValue(h, 240);
//     const max = Math.min(1, l * 2) * 255;
//     const min = (1 - s) * Math.min(1, l * 2) * 255;
//     const delta = (max - min) / 255;
//     r = Math.round(delta * r + min);
//     g = Math.round(delta * g + min);
//     b = Math.round(delta * b + min);
//   }
//   return [r, g, b];
// };

// r =
//   h <= 60 || h >= 300
//     ? 1
//     : h < 120
//     ? 1 - (h - 60) / 60
//     : h > 240
//     ? (h - 240) / 60
//     : 0;
// g =
//   h >= 60 && h <= 180
//     ? 1
//     : h < 60
//     ? h / 60
//     : h <= 240
//     ? 1 - (h - 240) / 60
//     : 0;
// b =
//   h >= 180 && h <= 300
//     ? 1
//     : h > 120 && h < 180
//     ? (h - 120) / 60
//     : h > 300 && h < 360
//     ? 1 - (h - 240) / 60
//     : 0;

// const darken = (amount, color) =>
//   rgb2hex(
//     hex2rgb(color).map((c) => Math.round(Math.max(0, c - amount * 2.55)))
//   );

// const lighten = (amount, color) =>
//   rgb2hex(
//     hex2rgb(color).map((c) => Math.round(Math.min(255, c + amount * 2.55)))
//   );
