const { RawSource } = require('webpack-sources');

const unicode = (source) => {
  const res = source.replace(/([\u0080-\uffff])/g, (str) => {
    let hex = str.charCodeAt().toString(16);
    for (let i = hex.length; i < 4; i += 1) {
      hex = `0${hex}`;
    }
    return `\\u${hex}`;
  })
  return res
}

module.exports = class UnicodePlugin {
  constructor(options) {
    this.options = options
  }

  // eslint-disable-next-line class-methods-use-this
  apply(complier) {
    complier.hooks.emit.tapAsync('UnicodePlugin', (compilation, callback) => {
      compilation.chunks.map((chunk) => {
        if (chunk.name === 'local') {
          chunk.files.map((filename) => {
            const source = unicode(compilation.assets[filename].source())
            const { assets } = compilation
            assets[filename] = new RawSource(source);
          })
        }
      })
      callback()
    })
  }
}
