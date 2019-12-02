const calculateShadedColor = (factor, color) => {
  const [r, g, b] = color.match(/(\d+)/g);
  return `rgb(${Math.round(r * (1 + factor))},${Math.round(g * (1 + factor))},${Math.round(b * (1 + factor))})`;
};

export const darken = (color, percentage) => calculateShadedColor(-1 * percentage, color);

export const lighten = (color, percentage) => calculateShadedColor(percentage, color);
