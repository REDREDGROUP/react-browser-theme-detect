# 🪄 React Browser Theme Detect 


[![NPM](https://nodei.co/npm/react-browser-theme-detect.png)](https://www.npmjs.com/package/react-browser-theme-detect)


# Usage
Add the dependency:

## NPM
```bash
npm install @redredgroup/react-browser-theme-detect
```

## Yarn
```bash
yarn add @redredgroup/react-browser-theme-detect
```

# Example


Import the package:

```js
import { isTheme, isThemeLight, isThemeDark } from "@redredgroup/react-browser-theme-detect";
```

Returns the String value for dark mode or light mode: 
```js
const themeString = isTheme();
// Returns "light" or "dark"
```

When the Boolean value for dark mode detection is required,

```js
const isDark = isThemeDark();
// If it is in dark mode, return true or false
```
```js
const isLight = isThemeLight();
// If it is in dark mode, return true or false
```

## 💡 Browser support

This package only works in browsers that natively support `@media (prefers-color-scheme)`, so it just returns `"light"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=prefers-color-scheme)
