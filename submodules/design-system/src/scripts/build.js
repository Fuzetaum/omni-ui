const log = require('./util/log.js');

const { buildColors } = require('./templates/color.js');

log.info('Compiling OmniUI tokens...');
buildColors();
log.success('OmniUI tokens compiled successfully!');