const { urlToRequest } = require('loader-utils');

module.exports = function(source) {
  const { isPureJson } = this.getOptions()

  if (isPureJson) {
    return JSON.stringify({ ...JSON.parse(source), test: 'Test' })
  }
  const str = source.replace('export default ', '')
  return `
    export default null;
    export const keys = [${Object.keys(JSON.parse(str)).map(d => `'${d}'`)}];
    export const values = [${Object.values(JSON.parse(str)).map(d => `'${d}'`)}];
  `
}
