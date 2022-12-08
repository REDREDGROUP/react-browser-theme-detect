export const isTheme = (): 'light' | 'dark' => {
  const browseTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (browseTheme) {
    return 'dark';
  }
  return 'light';
};

export const isThemeLight = (): boolean => {
  const browseTheme = window.matchMedia(
    '(prefers-color-scheme: light)',
  ).matches;
  if (browseTheme) {
    return true;
  }
  return false;
};

export const isThemeDark = (): boolean => {
  const browseTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (browseTheme) {
    return true;
  }
  return false;
};
