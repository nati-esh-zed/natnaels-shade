/**
 * Theme generator using replaced color variables.
 *
 * @author natnael
 * @license MIT
 */
const _fs = require("fs");
const _path = require("path");
const { dhsl, ahsl } = require("./utils.js");

const _config = {
  inputFilePath: _path.resolve(
    __dirname,
    "input--natnaels-shade-color-theme.json"
  ),
  outputFilePath: _path.resolve(
    __dirname,
    "themes/natnaels-shade-color-theme.json"
  ),
};

// Base palette (darkened equivalents)
const baseDark = "#121217"; // #171312
const baseMid = "#1f3241"; // #1f3241
const baseAccent = "#2d6da8"; // #2d6da8
const baseLight = "#ad9c85"; // #ad9c85

// Accent: muted and darkened cyan-magenta
const accent = dhsl([], ahsl([, 40, 40], baseAccent));

// Semantic tones - softened and darkened
const primary = dhsl([-120], ahsl([, 40, 55], baseAccent));
const secondary = dhsl([], ahsl([, 20, 60], baseLight));
const tertiary = dhsl([70], ahsl([, 30, 30], baseMid));
// const tertiary = dhsl([35], ahsl([, 30, 30], baseMid));

// Core background/foreground
const background = dhsl([], ahsl([, 10, 8.5], baseDark));
const foreground = dhsl([], ahsl([, 0, 57], baseLight));
const foreground1 = dhsl([], ahsl([, 10, 50], secondary));
const foreground2 = dhsl([], ahsl([, 10, 50], tertiary));

// Title Bar
const titleBarActiveBackground = dhsl([, , -1.5], ahsl([], background));
const titleBarInactiveBackground = dhsl([], ahsl([], background));
const titleBarBorder = dhsl([], ahsl([, , 12], foreground));

// Status Bar
const statusBarBackground = dhsl([, , -1.5], ahsl([], background));
const statusBarForeground = dhsl([], ahsl([], foreground));
const statusBarBorder = dhsl([], ahsl([, , 12], foreground));
const statusBarItemRemoteBackground = dhsl([], ahsl([, 37, 33], secondary));
const statusBarItemProminentBackground = dhsl([], ahsl([, , 12], secondary));
const statusBarItemActiveBackground = dhsl([], ahsl([, 37, 33], secondary));
const statusBarItemHoverBackground = dhsl([], ahsl([, 37, 33], secondary));
const statusBarItemHoverForeground = dhsl([], ahsl([, , 93], foreground));
// Side Bar
const sideBarBackground = dhsl([, , -1.5], ahsl([], background));
const sideBarForeground = dhsl([, , -10], ahsl([], foreground));
const sideBarBorder = dhsl([], ahsl([, , 12], foreground));
const sideBarTitleBackground = dhsl([, , -1.5], ahsl([], background));
const sideBarTitleBorder = dhsl([], ahsl([, , 12], foreground));
const sideBarSectionHeaderBackground = dhsl([, ,], ahsl([], background));

const iconForeground = dhsl([, , -14], ahsl([], foreground));
const listActiveSelectionBackground = dhsl([, , -14], ahsl([], foreground));
const listActiveSelectionForeground = dhsl([], ahsl([, , 67], foreground));
const listInactiveSelectionBackground = dhsl([], ahsl([, 10, 15], baseAccent));
const listInactiveSelectionForeground = dhsl([], ahsl([, , 67], foreground));
const listWarningForeground = dhsl([], ahsl([, 37, 47], "#ffcc00"));
const listErrorForeground = dhsl([], ahsl([, 37, 47], "#ff0000"));
// const listActiveSelectionIconForeground = dhsl([], ahsl([], foreground));
// Activity Bar
const activityBarBackground = dhsl([, , -1.5], ahsl([], background));
const activityBarActiveBackground = dhsl([, , 1], ahsl([], background));
const activityBarBorder = dhsl([], ahsl([, , 12], foreground));
// const activityBarForeground = dhsl([], ahsl([, , 47], foreground));
const activityBarForeground = dhsl([], ahsl([, , 50], foreground));
const activityBarInactiveForeground = dhsl([], ahsl([, , 37], foreground));
// Editor
const editorPaneBackground = dhsl([, , -1.5], ahsl([], background));
const editorLineNumberForeground = dhsl([], ahsl([, , 33], background));
const editorLineNumberActiveForeground = dhsl([], ahsl([, , 47], background));
const editorFoldBackground = dhsl([, , -2], ahsl([], background));
// Panel
const panelBackground = dhsl([, , -1.5], ahsl([], background));
const panelTitleBorder = dhsl([], ahsl([, , 12], foreground));
const panelTitleActiveBorder = dhsl([], ahsl([], foreground));
const panelTitleActiveForeground = dhsl([], ahsl([, , 47], foreground));
const panelTitleInactiveForeground = dhsl([], ahsl([, , 33], foreground));
// Tab
const tabBorder = dhsl([], ahsl([, , 12], foreground));
const tabInactiveBackground = dhsl([, , -1.5], ahsl([], background));
const tabInactiveForeground = dhsl([], ahsl([, , 33], foreground));
const editorGroupHeaderTabsBackground = dhsl([, , -1.5], ahsl([], background));
// Menu
const menuBackground = dhsl([, , 1.5], ahsl([], background));
const menuForeground = dhsl([], ahsl([], foreground));
// Input
const inputBackground = dhsl([, , 2], ahsl([], background));
const quickInputBackground = dhsl([, , 1.5], ahsl([], background));
// Comments and exceptions
const comments = dhsl([], ahsl([, 15, 37], baseMid));
const exceptions = dhsl([], ahsl([, 60, 47], "#701313"));

// Syntax
const operators = dhsl([], ahsl([, 10, 43], baseAccent));
const keywords = dhsl([], ahsl([, 37, 27], secondary));
const varTypes = dhsl([], ahsl([, 0, 37], baseAccent));
const types = dhsl([-30], ahsl([, 10, 37], baseAccent));
const langConstants = dhsl([], ahsl([, 30, 47], primary));
const variables = dhsl([], ahsl([, 0, 50], baseAccent));
const functions = dhsl([], ahsl([, 37, 50], baseAccent));
const classes = dhsl([], ahsl([, 40, 43], baseAccent));
const numeric = langConstants;
const characters = dhsl([], ahsl([, 33, 43], secondary));

const strings = dhsl([], ahsl([, 23, 47], secondary));
const stringEscape = dhsl([], ahsl([, 23, 37], secondary));
const regexp = dhsl([], ahsl([, 30, 40], secondary));
const symbols = dhsl([], ahsl([, 10, 43], baseAccent));
const punctuation = dhsl([], ahsl([, 10, 43], baseAccent));

const bracket1 = dhsl([], ahsl([, 27, 37], baseAccent));
const bracket2 = dhsl([70], ahsl([, 27, 37], baseAccent));
const bracket3 = dhsl([140], ahsl([, 27, 37], baseAccent));
const bracket4 = dhsl([210], ahsl([, 27, 37], baseAccent));

// HTML specific
const doctypeDecl = dhsl([], ahsl([, , 60], baseLight));
const htmlContent = dhsl([], ahsl([, 23, 43], secondary));
const tag = dhsl([], ahsl([, 10, 33], baseAccent));
const tagName = dhsl([], ahsl([, 47, 43], baseAccent));
const tagAttributeName = dhsl([], ahsl([, 20, 50], baseAccent));
const tagAttributeValue = dhsl([5], ahsl([, 60, 45], baseAccent));
const htmlEntities = htmlContent;

// CSS specific
const cssAtRules = dhsl([], ahsl([, 43, 47], tertiary));
const cssSelectors = dhsl([], ahsl([, 43, 47], baseAccent));
const cssPropertyNames = dhsl([], ahsl([, 0, 47], baseAccent));
const cssPropertyValues = dhsl([], ahsl([, 20, 47], secondary));
const cssConstants = dhsl([], ahsl([, 33, 47], secondary));
const cssVariables = dhsl([], ahsl([, 0, 47], secondary));
const cssNumericConstants = dhsl([], ahsl([, 17, 37], primary));
const cssUnits = dhsl([], ahsl([, 0, 47], baseAccent));
const cssImportantKeyword = dhsl([], ahsl([, 47, 43], primary));
const cssFunctions = dhsl([], ahsl([, 37, 47], baseAccent));
const cssStrings = dhsl([], ahsl([, 20, 47], secondary));
const cssSymbols = dhsl([], ahsl([, 0, 35], baseAccent));

function _process(_source) {
  const output = _source
    .replace(/^\s*\/\/.+$/gm, "")
    .replaceAll(
      /\"(.*?){{\s*((?:\\}|.)*?)\s*}}(.*?)\"/g,
      (_m, _pre, _code, _post, _index, _source) => {
        _code = _code ? _code.replace(/\\\}/g, "}") : "";
        let _line = 1;
        let _offset = 0;
        for (
          let i = _source.indexOf("\n");
          i > -1 && i < _index;
          i = _source.indexOf("\n", i + 1), _line++
        ) {
          _offset = i;
        }
        try {
          const _result = _code ? eval(`${_code};`) : "";
          return `"${_pre}${_result}${_post}"`;
        } catch (error) {
          console.error(
            new Date().toLocaleTimeString(),
            `: Error processing code at index ${
              _index - _offset
            } on line ${_line}:`,
            error
          );
          return `"${_pre}${_code}${_post}"`;
        }
      }
    );
  return output;
}

function _generateTheme() {
  console.log(new Date().toLocaleTimeString(), ": Generating theme...");
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
          console.log(
            new Date().toLocaleTimeString(),
            ": Theme generated successfully!"
          );
        }
      }
    );
  });
}

_generateTheme();

_fs.watchFile(_config.inputFilePath, (curr, prev) => {
  _generateTheme();
  console.log(
    new Date().toLocaleTimeString(),
    ": Input file changed, regenerating theme..."
  );
});
