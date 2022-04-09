const americanOnly = require('./american-only.js')
const americanToBritishSpelling = require('./american-to-british-spelling.js')
const americanToBritishTitles = require('./american-to-british-titles.js')
const britishOnly = require('./british-only.js')

class Translator {
  /**
   * @param {string} text
   * @param {'american-to-british' | 'british-to-american'} locale
   * @returns {string}
   */
  translate(text, locale = 'american-to-british') {}

  /**
   * @param {string} text
   * @param {'american-to-british' | 'british-to-american'} locale
   * @returns {string}
   */
  translateWithHighlight(text, locale = 'american-to-british') {}
}

module.exports = Translator
