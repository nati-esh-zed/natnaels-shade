const _fs = require("fs");
const _path = require("path");
const {
  hex2rgb,
  rgb2hex,
  rgb2hsl,
  hsl2rgb,
  saturate,
  desaturate,
  brighten,
  darken,
  dhsl,
  ahsl,
  hsl2hex,
  hex2hsl,
} = require("./utils.js");

const _config = {
  inputFilePath: _path.resolve(
    __dirname,
    "input--natnael-shade-color-theme.json"
  ),
  outputFilePath: _path.resolve(
    __dirname,
    "themes/natnael-shade-color-theme.json"
  ),
};

// const accent = hsl2hex([70, 100, 50]);
// const primary = ahsl([, 90, 70], accent);
// const secondary = ahsl([, 90, 70], "#FFD000");
// const tertiary = ahsl([, 90, 70], "#FF5100");
// const background = ahsl([, , 12], dhsl([], "#3D3D3D"));
// const foreground = ahsl([, 30], dhsl([-45], primary));
// const foreground1 = ahsl([], dhsl([], secondary));
// const foreground2 = ahsl([], dhsl([], tertiary));

// const comments = ahsl([], dhsl([], "#578E7E"));
// const exceptions = ahsl([], dhsl([], "#701313"));

// const operators = ahsl([, 30, 50], dhsl([], primary));
// const keywords = ahsl([, 30], dhsl([], primary));
// const varTypes = ahsl([, 30], dhsl([-45], primary));
// const langConstants = ahsl([, 30], dhsl([-45], primary));
// const variables = ahsl([, 30], dhsl([-45], primary));
// const functions = ahsl([, 30], dhsl([-45], primary));
// const types = ahsl([, 30], dhsl([-45], primary));
// const classes = ahsl([, 30], dhsl([-45], primary));
// const numeric = ahsl([, 30], dhsl([-45], primary));
// const characters = ahsl([, 30], dhsl([-45], primary));
// const strings = ahsl([, 30], dhsl([-45], primary));
// const stringEscape = ahsl([, 30], dhsl([-45], primary));
// const regexp = ahsl([, 30], dhsl([-45], primary));
// const symbols = ahsl([, 30], dhsl([-45], primary));
// const punctuation = ahsl([, 30], dhsl([-45], primary));

// const doctypeDecl = ahsl([, 30], dhsl([-45], primary));
// const htmlContent = ahsl([, 30], dhsl([-45], primary));
// const tag = ahsl([, 30], dhsl([-45], primary));
// const tagName = ahsl([, 30], dhsl([-45], primary));
// const tagAttributeName = ahsl([, 30], dhsl([-45], primary));
// const tagAttributeValue = ahsl([, 30], dhsl([-45], primary));
// const htmlEntities = ahsl([, 30], dhsl([-45], primary));

// // Base accent: Vibrant lime-green
// const accent = hsl2hex([125, 100, 54]); // vibrant contrast

// // Primary & relatives: icy electric blue for main syntax
// const primary = ahsl([, 90, 72], accent); // cold tone
// const secondary = ahsl([, 95, 65], "#00C0F0"); // sky cyan
// const tertiary = ahsl([, 90, 65], "#FF3E85"); // hot magenta

// // Background: deep graphite base with just enough luminance
// const background = ahsl([240, 8, 10], dhsl([], "#1E1E1E"));
// const foreground = ahsl([, 30, 82], dhsl([-35], primary)); // light steel
// const foreground1 = ahsl([, 30, 82], dhsl([-20], secondary)); // cyan-lean
// const foreground2 = ahsl([, 30, 82], dhsl([-15], tertiary)); // neon pink

// // Commentary & control
// const comments = ahsl([170, 30, 50], dhsl([+10, -30], "#578E7E")); // teal-muted
// const exceptions = ahsl([0, 80, 50], dhsl([+15, 0], "#C94040")); // bright red

// // Syntax elements
// const operators = ahsl([210, 80, 65], primary); // icy
// const keywords = ahsl([205, 100, 70], primary); // bright aqua
// const varTypes = ahsl([285, 80, 70], primary); // purplish
// const langConstants = ahsl([40, 95, 70], primary); // golden
// const variables = ahsl([220, 20, 82], primary); // steel-blue
// const functions = ahsl([130, 85, 65], primary); // neon green
// const types = ahsl([190, 70, 70], primary); // deep cyan
// const classes = ahsl([280, 75, 70], primary); // royal purple
// const numeric = ahsl([50, 90, 70], primary); // bright gold
// const characters = ahsl([340, 85, 70], primary); // pink-red
// const strings = ahsl([160, 70, 75], primary); // soft green
// const stringEscape = ahsl([300, 80, 70], primary); // electric pink
// const regexp = ahsl([20, 80, 70], primary); // bright orange
// const symbols = ahsl([60, 70, 65], primary); // lemon yellow
// const punctuation = ahsl([210, 10, 60], primary); // low contrast gray-blue

// // HTML-specific
// const doctypeDecl = ahsl([50, 20, 60], primary); // dull yellow
// const htmlContent = ahsl([, , 80], primary); // light gray
// const tag = ahsl([320, 80, 70], primary); // hot pink
// const tagName = ahsl([200, 80, 70], primary); // blue
// const tagAttributeName = ahsl([60, 80, 70], primary); // light gold
// const tagAttributeValue = ahsl([160, 60, 70], primary); // jade
// const htmlEntities = ahsl([10, 70, 70], primary); // coral

// // Base reference
// const base1 = "#FFFAEC"; // Light accent highlight
// const base2 = "#F5ECD5"; // Subtle light
// const base3 = "#578E7E"; // Muted teal, great for comments
// const base4 = "#3D3D3D"; // Background

// // Core
// const accent = hsl2hex([160, 35, 52]); // Custom: a neutral green-blue
// const primary = ahsl([, 90, 75], base3);
// const secondary = ahsl([, 90, 70], base2);
// const tertiary = ahsl([, 90, 65], base1);

// // Background/foreground
// const background = ahsl([, , 10], dhsl([], base4));
// const foreground = ahsl([, 20, 85], dhsl([-40], primary));
// const foreground1 = ahsl([, 20], dhsl([], secondary));
// const foreground2 = ahsl([, 20], dhsl([], tertiary));

// // Meta
// const comments = ahsl([], dhsl([-10, -20, +10], base3));
// const exceptions = ahsl([0, 80, 60], dhsl([0, 0, 0], "#993333"));

// // Syntax
// const operators = ahsl([180, 40, 65], primary);
// const keywords = ahsl([195, 50, 70], primary);
// const varTypes = ahsl([40, 50, 70], primary);
// const langConstants = ahsl([50, 55, 70], primary);
// const variables = ahsl([0, 0, 85], primary);
// const functions = ahsl([160, 40, 65], primary);
// const types = ahsl([250, 40, 70], primary);
// const classes = ahsl([270, 40, 70], primary);
// const numeric = ahsl([35, 65, 70], primary);
// const characters = ahsl([330, 60, 70], primary);
// const strings = ahsl([120, 45, 75], primary);
// const stringEscape = ahsl([300, 60, 70], primary);
// const regexp = ahsl([15, 70, 70], primary);
// const symbols = ahsl([60, 60, 70], primary);
// const punctuation = ahsl([, 20, 60], primary);

// // HTML-specific
// const doctypeDecl = ahsl([50, 20, 60], primary);
// const htmlContent = ahsl([, , 80], primary);
// const tag = ahsl([340, 50, 70], primary);
// const tagName = ahsl([190, 70, 70], primary);
// const tagAttributeName = ahsl([70, 60, 70], primary);
// const tagAttributeValue = ahsl([160, 60, 70], primary);
// const htmlEntities = ahsl([10, 70, 70], primary);

// // Blended base tones
// const darkBase = "#3D3D3D";
// const softTeal = "#578E7E";
// const softGreen = "#99BC85";
// const softMint = "#E4EFE7";
// const warmBeige = "#FAF1E6";

// // Accent: olive-mint blend
// const accent = hsl2hex([130, 30, 55]); // softened green

// // Primary colors
// const primary = ahsl([, 35, 70], softTeal); // cool teal
// const secondary = ahsl([, 30, 72], softMint); // minty white
// const tertiary = ahsl([, 25, 70], warmBeige); // warm pale

// // Background and foreground
// const background = ahsl([, , 14], dhsl([], darkBase));
// const foreground = ahsl([, 10, 85], dhsl([-40], primary)); // light neutral
// const foreground1 = ahsl([, 10, 80], dhsl([], secondary));
// const foreground2 = ahsl([, 10, 80], dhsl([], tertiary));

// // Comments and errors
// const comments = ahsl([165, 25, 55], dhsl([+5, -20], softTeal));
// const exceptions = ahsl([0, 60, 50], dhsl([-5, +10], "#B05050"));

// // Syntax (gently modulated)
// const operators = ahsl([180, 30 - 10, 65], primary);
// const keywords = ahsl([200, 35 - 10, 70], primary);
// const varTypes = ahsl([110, 30 - 10, 70], softGreen);
// const langConstants = ahsl([60, 35 - 10, 70], tertiary);
// const variables = ahsl([120, 15 - 10, 80], primary);
// const functions = ahsl([130, 25 - 10, 65], primary);
// const types = ahsl([160, 25 - 10, 65], softMint);
// const classes = ahsl([180, 20 - 10, 70], primary);
// const numeric = ahsl([50, 30 - 10, 70], tertiary);
// const characters = ahsl([20, 40 - 10, 70], primary);
// const strings = ahsl([95, 30 - 10, 75], softGreen);
// const stringEscape = ahsl([260, 30 - 10, 70], primary);
// const regexp = ahsl([25, 40 - 10, 70], primary);
// const symbols = ahsl([80, 30 - 10, 65], primary);
// const punctuation = ahsl([, 15, 60], primary);

// // HTML-specific
// const doctypeDecl = ahsl([45, 20 - 10, 60], primary);
// const htmlContent = ahsl([, , 85], primary);
// const tag = ahsl([170, 30 - 10, 70], primary);
// const tagName = ahsl([195, 30 - 10, 70], primary);
// const tagAttributeName = ahsl([90, 30 - 10, 70], primary);
// const tagAttributeValue = ahsl([130, 30 - 10, 70], primary);
// const htmlEntities = ahsl([20, 30 - 10, 70], primary);

// // Palette base
// const baseDark = "#222831"; // background
// const baseMid = "#393E46"; // surface
// const baseAccent = "#00ADB5"; // cyan
// const baseLight = "#EEEEEE"; // foreground

// // Accent color
// const accent = hsl2hex([185, 100, 45]); // vibrant cyan (from #00ADB5)

// // Primary + tonal variants
// const primary = ahsl([, 90, 70], baseAccent); // base cyan
// const secondary = ahsl([, 30, 80], baseLight); // white-leaning gray
// const tertiary = ahsl([, 20, 35], baseMid); // cool-gray tone

// // Background / Foreground
// const background = ahsl([, , 11], dhsl([], baseDark));
// const foreground = ahsl([, 15, 90], dhsl([-30], baseLight)); // light neutral
// const foreground1 = ahsl([, 10], dhsl([], secondary)); // slight tone shift
// const foreground2 = ahsl([, 10], dhsl([], tertiary)); // low contrast alt

// // Comments / Exceptions
// const comments = ahsl([180, 20, 55], dhsl([-10, -10], baseMid)); // soft gray-cyan
// const exceptions = ahsl([0, 70, 55], dhsl([0, 0], "#C75050")); // muted red

// // Syntax groups (cool, restrained color shifts)
// const operators = ahsl([185, 80, 65], primary); // cyan
// const keywords = ahsl([195, 50, 70], primary); // blue-shifted
// const varTypes = ahsl([100, 30, 70], primary); // greenish
// const langConstants = ahsl([45, 45, 70], primary); // warm balance
// const variables = ahsl([0, 0, 85], primary); // light neutral
// const functions = ahsl([160, 50, 65], primary); // sea green
// const types = ahsl([200, 35, 70], primary); // steel cyan
// const classes = ahsl([220, 25, 70], primary); // gray-blue
// const numeric = ahsl([35, 50, 70], primary); // sand-like
// const characters = ahsl([10, 60, 70], primary); // mild red-orange
// const strings = ahsl([140, 35, 75], primary); // minty
// const stringEscape = ahsl([300, 30, 70], primary); // magenta
// const regexp = ahsl([20, 60, 70], primary); // orange
// const symbols = ahsl([60, 50, 65], primary); // yellowed
// const punctuation = ahsl([, 15, 65], primary); // soft gray

// // HTML-specific
// const doctypeDecl = ahsl([50, 20, 60], primary);
// const htmlContent = ahsl([, , 90], primary);
// const tag = ahsl([180, 50, 70], primary);
// const tagName = ahsl([195, 50, 70], primary);
// const tagAttributeName = ahsl([90, 50, 70], primary);
// const tagAttributeValue = ahsl([170, 40, 70], primary);
// const htmlEntities = ahsl([15, 50, 70], primary);

// // Base palette
// const baseDark = "#222831"; // dark background
// const baseMid = "#393E46"; // UI surfaces
// const baseAccent = "#00ADB5"; // cyan accent
// const baseLight = "#EEEEEE"; // text

// // Accent: cool cyan, but desaturated
// const accent = hsl2hex([185, 35, 55]); // muted cyan

// // Semantic tones
// const primary = ahsl([, 25, 72], baseAccent); // soft cyan
// const secondary = ahsl([, 15, 78], baseLight); // soft gray
// const tertiary = ahsl([, 10, 35], baseMid); // UI shadow color

// // Core background/foreground
// const background = ahsl([, , 15], dhsl([], baseDark));
// const foreground = ahsl([, 10, 87], dhsl([-30], baseLight)); // muted white
// const foreground1 = ahsl([, 8, 80], dhsl([], secondary));
// const foreground2 = ahsl([, 6, 70], dhsl([], tertiary));

// // Comments and exceptions
// const comments = ahsl([180, 10, 52], dhsl([-15, -10], baseMid)); // low-sat cyan-gray
// const exceptions = ahsl([0, 30, 55], dhsl([-10], "#B25555")); // muted red

// // Syntax – low saturation
// const operators = ahsl([185, 25, 65], primary);
// const keywords = ahsl([195, 20, 70], primary);
// const varTypes = ahsl([100, 20, 68], primary);
// const langConstants = ahsl([45, 15, 70], primary);
// const variables = ahsl([0, 0, 82], primary);
// const functions = ahsl([160, 20, 68], primary);
// const types = ahsl([200, 20, 70], primary);
// const classes = ahsl([220, 15, 70], primary);
// const numeric = ahsl([40, 15, 68], primary);
// const characters = ahsl([15, 20, 68], primary);
// const strings = ahsl([135, 15, 72], primary);
// const stringEscape = ahsl([300, 15, 70], primary);
// const regexp = ahsl([25, 20, 70], primary);
// const symbols = ahsl([65, 15, 70], primary);
// const punctuation = ahsl([, 10, 60], primary);

// // HTML-specific
// const doctypeDecl = ahsl([45, 10, 60], primary);
// const htmlContent = ahsl([, , 85], primary);
// const tag = ahsl([175, 20, 70], primary);
// const tagName = ahsl([195, 20, 70], primary);
// const tagAttributeName = ahsl([90, 20, 70], primary);
// const tagAttributeValue = ahsl([170, 20, 70], primary);
// const htmlEntities = ahsl([15, 20, 70], primary);

// Base palette (darkened equivalents)
const baseDark = "#121217"; //rgb(23, 19, 18)
const baseMid = "#1f3241"; // #1f3241
const baseAccent = "#2d6da8"; // #2d6da8
const baseLight = "#d6ccc5"; // #d6ccc5

// Accent: muted and darkened cyan-magenta
const accent = dhsl([], ahsl([, 40, 40], baseAccent)); // muted magenta

// Semantic tones - softened and darkened
const primary = dhsl([-120], ahsl([, 40, 55], baseAccent));
const secondary = dhsl([16], ahsl([, 20, 60], baseLight));
const tertiary = dhsl([35], ahsl([, 30, 30], baseMid));

// Core background/foreground
const background = dhsl([], ahsl([, 10, 7.5], baseDark));
const foreground = dhsl([], ahsl([, 10, 50], baseLight));
const foreground1 = dhsl([], ahsl([, 10, 50], secondary));
const foreground2 = dhsl([], ahsl([, 10, 50], tertiary));

// Comments and exceptions
const comments = dhsl([], ahsl([150, 15, 33], baseMid));
const exceptions = dhsl([], ahsl([, 60, 40], "#701313"));

// Syntax - darkened versions of light theme colors
const operators = dhsl([], ahsl([, 10, 37], baseAccent)); // dhsl([], ahsl([, 0, 40], primary));
const keywords = dhsl([], ahsl([, 37, 33], primary)); //dhsl([], ahsl([, 10, 33], baseAccent));
const varTypes = dhsl([], ahsl([, 47, 43], baseAccent));
const types = dhsl([], ahsl([, 33, 40], primary)); //dhsl([], ahsl([, 33, 33], baseAccent));
const langConstants = dhsl([], ahsl([, 30, 50], primary));
const variables = dhsl([], ahsl([, 20, 50], baseAccent)); //dhsl([], ahsl([, 20, 33], primary));
const functions = dhsl([], ahsl([, 37, 50], baseAccent));
const classes = dhsl([], ahsl([, 40, 43], baseAccent)); //dhsl([5], ahsl([, 70, 40], baseAccent));
const numeric = langConstants; // dhsl([], ahsl([, 30, 50], tertiary));
const characters = dhsl([], ahsl([, 33, 43], secondary));
// const texts = dhsl([16], ahsl([, 10, 60], baseLight));
const strings = dhsl([], ahsl([, 33, 43], secondary));
const stringEscape = dhsl([], ahsl([20, 45], secondary));
const regexp = dhsl([], ahsl([, 30, 40], secondary));
const symbols = dhsl([], ahsl([, 10, 37], primary));
const punctuation = dhsl([], ahsl([, 5, 33], primary)); //dhsl([], ahsl([, 30, 50], baseAccent));

const bracket1 = dhsl([], ahsl([, 27, 37], baseAccent));
const bracket2 = dhsl([70], ahsl([, 27, 37], baseAccent));
const bracket3 = dhsl([140], ahsl([, 27, 37], baseAccent));
const bracket4 = dhsl([210], ahsl([, 27, 37], baseAccent));

// HTML specific - dark mode adjusted
const doctypeDecl = dhsl([], ahsl([, , 60], baseLight));
const htmlContent = dhsl([], ahsl([, 10, 50], baseLight));
const tag = dhsl([5], ahsl([, 10, 33], baseAccent));
const tagName = dhsl([5], ahsl([, 47, 43], baseAccent)); //dhsl([5], ahsl([, 70, 40], baseAccent));
const tagAttributeName = dhsl([], ahsl([, 20, 50], baseAccent));
const tagAttributeValue = dhsl([5], ahsl([, 60, 45], baseAccent));
const htmlEntities = htmlContent; //dhsl([15], ahsl([, 20, 65], baseLight));

// #fff3bf
// #a4a190
// #8c8873
// #8c8873
// #f4f3f1
// #fff7d4
// #FFD000
// #00AEFF
// #5100FF

// Array.isArray(color)
// ? color.map((c) => Math.max(0, c - amount))

// console.log(hex2rgb(accent));
// console.log(darken(accent, 25));
// console.log(lighten(accent, 25));
// console.log(Number(23).toString(16));
// console.log(rgb2hex(hex2rgb("#ffff00")));

function _process(_source) {
  const output = _source.replaceAll(
    /\"(.*?){{((?:\\}|.)*?)}}(.*?)\"/g,
    (_m, _pre, _code, _post, _index, _source) => {
      _code = _code ? _code.replace(/\\\}/g, "}") : "";
      let _line = 1;
      let _offset = 0;
      // console.log(_index, _code);
      for (
        let i = _source.indexOf("\n");
        i > -1 && i < _index;
        i = _source.indexOf("\n", i + 1), _line++
      ) {
        _offset = i;
      }
      // console.log(_index - _offset, _line, _code);
      try {
        const _result = _code ? eval(`${_code};`) : "";
        // console.log(_result);
        return `"${_pre}${_result}${_post}"`;
      } catch (error) {
        console.error(
          new Date().toLocaleTimeString(),
          `: Error processing code at index ${
            _index - _offset
          } on line ${_line}:`,
          error
        );
        return `"${_pre}${_code}${_post}"`; // Return the original string if there's an error
      }
    }
  );
  // console.log(output);
  return output;
}

function _generateTheme() {
  // Read the input theme file
  _fs.readFile(_config.inputFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading input file:", err);
      return;
    }

    // process the input theme
    const processedData = _process(data);

    // Write the modified theme to the output file
    _fs.writeFile(
      _config.outputFilePath,
      processedData,
      "utf8",
      (writeError) => {
        if (writeError) {
          console.error(
            new Date().toLocaleTimeString(),
            ": Error writing output file:",
            writeError
          );
        } else {
          // console.log("Theme generated successfully!");
        }
      }
    );
  });
}

console.log(new Date().toLocaleTimeString(), ": Generating theme...");
_generateTheme();

_fs.watchFile(_config.inputFilePath, (curr, prev) => {
  _generateTheme();
  console.log(
    new Date().toLocaleTimeString(),
    ": Input file changed, regenerating theme..."
  );
});
