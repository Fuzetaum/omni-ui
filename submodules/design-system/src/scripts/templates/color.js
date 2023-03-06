const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const buildColors = () => {
  const colorTokensDictionary = require('style-dictionary').extend({
    source: [
      `${path.resolve(__dirname, '../../tokens')}\\**\\*.json`],
      platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: 'build/scss/',
        files: [{
          destination: 'colors.scss',
          format: 'scss/global/color'
        }],
      }
    },
  });
  colorTokensDictionary.registerFormat({
    name: 'scss/global/color',
    formatter: ({ dictionary }) => {
      return ejs.render(
        fs.readFileSync(__dirname + '/color.ejs', "utf-8"),
        { tokens: dictionary.tokens.color },
        {}
      );
    },
  });

  colorTokensDictionary.buildAllPlatforms();
};

module.exports = { buildColors };