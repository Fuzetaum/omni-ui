export let THEME_CAUTION_COLOR_BRIGHT = 'rgb(255, 133, 133)';
export let THEME_CAUTION_COLOR_MEDIUM = 'rgb(214, 114, 114)';
export let THEME_CAUTION_COLOR_DARK = 'rgb(179, 96, 96)';
export let THEME_CAUTION_COLOR_TEXT = 'rgb(0, 0, 0)';
export let THEME_DEFAULT_COLOR_BRIGHT = 'rgb(255, 255, 255)';
export let THEME_DEFAULT_COLOR_MEDIUM = 'rgb(217, 217, 217)';
export let THEME_DEFAULT_COLOR_DARK = 'rgb(186, 186, 186)';
export let THEME_DEFAULT_COLOR_TEXT = 'rgb(0, 0, 0)';
export let THEME_PRIMARY_COLOR_BRIGHT = 'rgb(152, 61, 255)';
export let THEME_PRIMARY_COLOR_MEDIUM = 'rgb(116, 50, 191)';
export let THEME_PRIMARY_COLOR_DARK = 'rgb(79, 34, 130)';
export let THEME_PRIMARY_COLOR_TEXT = 'rgb(250, 250, 250)';

const configureOmniUITheme = (colorDefs) => {
  THEME_CAUTION_COLOR_BRIGHT = (colorDefs.caution && colorDefs.caution.bright)
    || THEME_CAUTION_COLOR_BRIGHT;
  THEME_CAUTION_COLOR_MEDIUM = (colorDefs.caution && colorDefs.caution.medium)
    || THEME_CAUTION_COLOR_MEDIUM;
  THEME_CAUTION_COLOR_DARK = (colorDefs.caution && colorDefs.caution.dark)
    || THEME_CAUTION_COLOR_DARK;
  THEME_CAUTION_COLOR_TEXT = (colorDefs.caution && colorDefs.caution.text)
    || THEME_CAUTION_COLOR_TEXT;

  THEME_DEFAULT_COLOR_BRIGHT = (colorDefs.default && colorDefs.default.bright)
    || THEME_DEFAULT_COLOR_BRIGHT;
  THEME_DEFAULT_COLOR_MEDIUM = (colorDefs.default && colorDefs.default.medium)
    || THEME_DEFAULT_COLOR_MEDIUM;
  THEME_DEFAULT_COLOR_DARK = (colorDefs.default && colorDefs.default.dark)
    || THEME_DEFAULT_COLOR_DARK;
  THEME_DEFAULT_COLOR_TEXT = (colorDefs.default && colorDefs.default.text)
    || THEME_DEFAULT_COLOR_TEXT;

  THEME_PRIMARY_COLOR_BRIGHT = (colorDefs.primary && colorDefs.primary.bright)
    || THEME_PRIMARY_COLOR_BRIGHT;
  THEME_PRIMARY_COLOR_MEDIUM = (colorDefs.primary && colorDefs.primary.medium)
    || THEME_PRIMARY_COLOR_MEDIUM;
  THEME_PRIMARY_COLOR_DARK = (colorDefs.primary && colorDefs.primary.dark)
    || THEME_PRIMARY_COLOR_DARK;
  THEME_PRIMARY_COLOR_TEXT = (colorDefs.primary && colorDefs.primary.text)
    || THEME_PRIMARY_COLOR_TEXT;
};

export default configureOmniUITheme;
