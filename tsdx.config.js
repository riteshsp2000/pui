const url = require('rollup-plugin-url');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      url({
        include: ['**/*.otf'],
        limit: Infinity,
      }),
      url({
        include: ['**/*.ttf'],
        limit: Infinity,
      }),
      ...config.plugins,
    ];

    return config;
  },
};
