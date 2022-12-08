"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThemeDark = exports.isThemeLight = exports.isTheme = void 0;
const isTheme = () => {
    const browseTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (browseTheme) {
        return 'dark';
    }
    return 'light';
};
exports.isTheme = isTheme;
const isThemeLight = () => {
    const browseTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (browseTheme) {
        return true;
    }
    return false;
};
exports.isThemeLight = isThemeLight;
const isThemeDark = () => {
    const browseTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (browseTheme) {
        return true;
    }
    return false;
};
exports.isThemeDark = isThemeDark;
//# sourceMappingURL=index.js.map