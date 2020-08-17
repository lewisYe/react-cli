module.exports = function unicodeLoader(source) {
  const res = source.replace(/([\u0080-\uffff])/g, (str) => {
    let hex = str.charCodeAt().toString(16);
    for (let i = hex.length; i < 4; i += 1) {
      hex = `0${hex}`;
    }
    return `\\u${hex}`;
  })
  this.callback(null, res)
}
