let staticConfig = {};

try {
  staticConfig = require('../src/app.json');
} catch (error) {
  // ignore error
}

// @ts-ignore
export default staticConfig.__esModule ? staticConfig.default : staticConfig;
