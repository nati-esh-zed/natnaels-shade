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
  inputFilePath: _path.resolve(__dirname, "input--natnaels-shade-color-theme.json"),
  outputFilePath: _path.resolve(__dirname, "themes/natnaels-shade-color-theme.json")
};

// Base palette (darkened equivalents)
const baseDark = ahsl([,], "#121217"); // #171312
const baseMid = ahsl([,], "#1f3241"); // #1f3241
const baseAccent = ahsl([,], "#2d6da8"); // #2d6da8
const baseLight = ahsl([,], "#ad9c85"); // #ad9c85

const satuAdj = 0;
const lumaAdj = 10;

const satuAdjBg = -10;
const lumaAdjBg = 2.75;
const lumaDelBg = -4.5;
const lumaDelTabBg = -1;
const lumaDel3 = -14;

const satuAdjBr = -10;
const lumaAdjBr = 0;

const transparent = "#00000000";

// Accent: muted and darkened cyan-magenta
const accent = dhsl([, satuAdj, lumaAdj], ahsl([, 40, 40], baseAccent));

// Semantic tones - softened and darkened
const primary = dhsl([-120, satuAdj, lumaAdj], ahsl([, 40, 55], baseAccent));
const secondary = dhsl([, satuAdj, lumaAdj], ahsl([, 20, 60], baseLight));
const tertiary = dhsl([70, satuAdj, lumaAdj], ahsl([, 30, 30], baseMid));
// const tertiary = dhsl([35], aforegroundhsl([, 30, 30], baseMid));

// Core background/foreground
const background = dhsl([, satuAdjBg, lumaAdjBg], ahsl([, , 8.5], baseDark));
const foreground = dhsl([, satuAdj, lumaAdj], ahsl([, 0, 57], baseLight));
const dimForeground1 = dhsl([, satuAdj, lumaAdj], ahsl([, , 43], foreground));
const dimForeground2 = dhsl([, satuAdj, lumaAdj], ahsl([, , 53], foreground));
const foreground1 = dhsl([, satuAdj, lumaAdj], ahsl([, 10, 50], secondary));
const foreground2 = dhsl([, satuAdj, lumaAdj], ahsl([, 10, 50], tertiary));
const border = dhsl([, satuAdjBr, lumaAdjBr - 1.5], ahsl([, ,], background));
const border1 = dhsl([, satuAdjBr, lumaAdjBr - 3], ahsl([, ,], background));
const borderAccent = dhsl([, satuAdjBg, lumaAdjBg], ahsl([, 23, 23], primary));
const borderAccent1 = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([, 17, 17], borderAccent));
const borderAccent2 = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([, 33, 43], borderAccent));

// Title Bar
const titleBarActiveBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelTabBg], ahsl([], background));
const titleBarInactiveBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
const titleBarBorder = transparent;
// Status Bar
const statusBarBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
const statusBarForeground = dhsl([, satuAdj, lumaAdj], ahsl([], foreground));
const statusBarBorder = borderAccent1;
const statusBarItemRemoteBackground = dhsl([, satuAdjBg, lumaAdjBg], ahsl([, 37, 33], primary));
const statusBarItemProminentBackground = dhsl([, satuAdjBg, lumaAdjBg], ahsl([, , 12], primary));
const statusBarItemActiveBackground = dhsl([, satuAdjBg, lumaAdjBg], ahsl([, 37, 33], primary));
const statusBarItemHoverBackground = dhsl([, satuAdjBg, lumaAdjBg], ahsl([, 37, 33], primary));
const statusBarItemHoverForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 93], foreground));
// Side Bar
const sideBarBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
const sideBarForeground = dhsl([, satuAdj, lumaAdj - 10], ahsl([], foreground));
const sideBarBorder = borderAccent1;
const sideBarTitleBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
const sideBarTitleBorder = border;
const sideBarSectionHeaderBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelTabBg], ahsl([], background));
// List
const iconForeground = dhsl([, satuAdj, lumaAdj + lumaDel3], ahsl([, ,], foreground));
const listActiveSelectionBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDel3], ahsl([], foreground));
const listActiveSelectionForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 67], foreground));
const listInactiveSelectionBackground = dhsl([, satuAdjBg, lumaAdjBg], ahsl([, 10, 15], baseAccent));
const listInactiveSelectionForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 67], foreground));
const listWarningForeground = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 47], "#ffcc00"));
const listErrorForeground = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 47], "#ff0000"));
// Activity Bar
const activityBarBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
const activityBarActiveBackground = dhsl([, satuAdjBg, lumaAdjBg + 1], ahsl([], background));
const activityBarBorder = borderAccent1;
// const activityBarForeground = dhsl([,,lumaAdj], ahsl([, , 47], foreground));
const activityBarForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 50], foreground));
const activityBarInactiveForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 37], foreground));
// Editor
const editorPaneBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
const editorLineNumberForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 33], background));
const editorLineNumberActiveForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 47], background));
const editorFoldBackground = dhsl([, satuAdjBg, lumaAdjBg - lumaDelTabBg], ahsl([], background));
const editorGroupBorder = border;
const editorGroupHeaderBorder = transparent;
const editorHoverWidgetBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelTabBg], ahsl([, ,], background));
const editorHoverWidgetBorder = borderAccent;
// Panel
const panelBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
const panelTitleBorder = border;
const panelTitleActiveBorder = border;
const panelTitleActiveForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 47], foreground));
const panelTitleInactiveForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 33], foreground));
const panelBorder = borderAccent;
// Tab
const tabBorder = border;
const tabActiveBorder = transparent;
const tabActiveBackground = dhsl([, satuAdjBg, lumaAdjBg - lumaAdjBg], ahsl([], background));
const tabInactiveBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelTabBg], ahsl([], background));
const tabInactiveForeground = dhsl([, satuAdj, lumaAdj], ahsl([, , 47], foreground));
const tabSelectedBorderTop = borderAccent2;
const tabLastPinnedBorder = borderAccent;
const editorGroupHeaderTabsBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelBg], ahsl([], background));
// Notebook
const notebookCellBorderColor = border;
// Menu
const menuBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelTabBg], ahsl([], background));
const menuForeground = dhsl([, satuAdj, lumaAdj], ahsl([], foreground));
const menuBorder = borderAccent;
// Input
const inputBackground = dhsl([, satuAdjBg, lumaAdjBg + 2], ahsl([], background));
const inputBorder = dhsl([, satuAdjBr, lumaAdjBr], ahsl([, ,], background));
const quickInputBackground = dhsl([, satuAdjBg, lumaAdjBg + lumaDelTabBg], ahsl([], background));
const quickInputBorder = inputBorder;
// Comments, errors, warnings and exceptions
const errors = dhsl([, satuAdj, lumaAdj], ahsl([, 57, 33], "#701313"));
const warnings = dhsl([, satuAdj, lumaAdj], ahsl([, 67, 43], "#705713"));
const editorErrors = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 33], "#701313"));
const editorWarnings = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 33], "#705713"));
const minimapErrors = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 23], "#701313"));
const minimapWarnings = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 23], "#705713"));
const comments = dhsl([, satuAdj, lumaAdj], ahsl([, 15, 37], baseMid));
const exceptions = errors;

// Badge
const badges = dhsl([, satuAdj, lumaAdj], ahsl([, 67, 43], accent));
const badgesForeground = dhsl([, satuAdj, lumaAdj], ahsl([, 23, 97], accent));
const errorBadgeBackground = errors;
const errorBadgeForeground = dhsl([, satuAdj, lumaAdj], ahsl([, 23, 97], errorBadgeBackground));
const warningBadgeBackground = warnings;
const warningBadgeForeground = dhsl([, satuAdj, lumaAdj], ahsl([, 23, 0], warningBadgeBackground));

// Syntax
const operators = dhsl([, satuAdj, lumaAdj], ahsl([, 10, 43], baseAccent));
const keywords = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 27], secondary));
const varTypes = dhsl([, satuAdj, lumaAdj], ahsl([, 0, 37], baseAccent));
const types = dhsl([-30, satuAdj, lumaAdj], ahsl([, 10, 37], baseAccent));
const langConstants = dhsl([, satuAdj, lumaAdj], ahsl([, 30, 47], primary));
const variables = dhsl([, satuAdj, lumaAdj], ahsl([, 0, 50], baseAccent));
const functions = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 50], baseAccent));
const classes = dhsl([, satuAdj, lumaAdj], ahsl([, 40, 43], baseAccent));
const numeric = langConstants;
const characters = dhsl([, satuAdj, lumaAdj], ahsl([, 33, 43], secondary));

const strings = dhsl([, satuAdj, lumaAdj], ahsl([, 23, 47], secondary));
const stringEscape = dhsl([, satuAdj, lumaAdj], ahsl([, 23, 37], secondary));
const regexp = dhsl([, satuAdj, lumaAdj], ahsl([, 30, 40], secondary));
const symbols = dhsl([, satuAdj, lumaAdj], ahsl([, 10, 43], baseAccent));
const punctuation = dhsl([, satuAdj, lumaAdj], ahsl([, 10, 43], baseAccent));

const bracket1 = dhsl([, satuAdj, lumaAdj], ahsl([, 27, 37], baseAccent));
const bracket2 = dhsl([70, satuAdj, lumaAdj], ahsl([, 27, 37], baseAccent));
const bracket3 = dhsl([140, satuAdj, lumaAdj], ahsl([, 27, 37], baseAccent));
const bracket4 = dhsl([210, satuAdj, lumaAdj], ahsl([, 27, 37], baseAccent));

// HTML specific
const doctypeDecl = dhsl([, satuAdj, lumaAdj], ahsl([, , 60], baseLight));
const htmlContent = dhsl([, satuAdj, lumaAdj], ahsl([, 23, 43], secondary));
const tag = dhsl([, satuAdj, lumaAdj], ahsl([, 10, 33], baseAccent));
const tagName = dhsl([, satuAdj, lumaAdj], ahsl([, 47, 43], baseAccent));
const tagAttributeName = dhsl([, satuAdj, lumaAdj], ahsl([, 20, 50], baseAccent));
const tagAttributeValue = dhsl([5, satuAdj, lumaAdj], ahsl([, 60, 45], baseAccent));
const htmlEntities = htmlContent;

// CSS specific
const cssAtRules = dhsl([, satuAdj, lumaAdj], ahsl([, 33, 47], tertiary));
const cssSelectors = dhsl([, satuAdj, lumaAdj], ahsl([, 43, 47], baseAccent));
const cssPropertyNames = dhsl([, satuAdj, lumaAdj], ahsl([, 0, 47], baseAccent));
const cssPropertyValues = dhsl([, satuAdj, lumaAdj], ahsl([, 20, 47], secondary));
const cssConstants = dhsl([, satuAdj, lumaAdj], ahsl([, 33, 47], secondary));
const cssVariables = dhsl([, satuAdj, lumaAdj], ahsl([, 0, 47], secondary));
const cssNumericConstants = dhsl([, satuAdj, lumaAdj], ahsl([, 17, 37], primary));
const cssUnits = dhsl([, satuAdj, lumaAdj], ahsl([, 0, 47], baseAccent));
const cssImportantKeyword = dhsl([, satuAdj, lumaAdj], ahsl([, 47, 43], primary));
const cssFunctions = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 47], baseAccent));
const cssStrings = dhsl([, satuAdj, lumaAdj], ahsl([, 20, 47], secondary));
const cssSymbols = dhsl([, satuAdj, lumaAdj], ahsl([, 0, 35], baseAccent));

// Markdown
const headings = accent;
const lists = foreground1;
const links = dhsl([, satuAdj, lumaAdj], ahsl([, , 37], comments));
const quotes = dhsl([, satuAdj, lumaAdj], ahsl([, 17, 37], primary));
const inlineCode = dhsl([, satuAdj, lumaAdj], ahsl([, 37, 37], secondary));
const stylings = foreground;

////////////////////////////////////////////////////////////

function _process(_source) {
  const output = _source
    .replace(/^\s*\/\/.+$/gm, "")
    .replaceAll(/\"(.*?){{\s*((?:\\}|.)*?)\s*}}(.*?)\"/g, (_m, _pre, _code, _post, _index, _source) => {
      _code = _code ? _code.replace(/\\\}/g, "}") : "";
      let _line = 1;
      let _offset = 0;
      for (let i = _source.indexOf("\n"); i > -1 && i < _index; i = _source.indexOf("\n", i + 1), _line++) {
        _offset = i;
      }
      try {
        const _result = _code ? eval(`${_code};`) : "";
        return `"${_pre}${_result}${_post}"`;
      } catch (error) {
        console.error(
          new Date().toLocaleTimeString(),
          `: Error processing code at index ${_index - _offset} on line ${_line}:`,
          error
        );
        return `"${_pre}${_code}${_post}"`;
      }
    });
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
    _fs.writeFile(_config.outputFilePath, processedData, "utf8", writeError => {
      if (writeError) {
        console.error(new Date().toLocaleTimeString(), ": Error writing output file:", writeError);
      } else {
        console.log(new Date().toLocaleTimeString(), ": Theme generated successfully!");
      }
    });
  });
}

_generateTheme();

_fs.watchFile(_config.inputFilePath, (curr, prev) => {
  _generateTheme();
  console.log(new Date().toLocaleTimeString(), ": Input file changed, regenerating theme...");
});
