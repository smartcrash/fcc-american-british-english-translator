const americanOnly = require('./american-only.js')
const americanToBritishSpelling = require('./american-to-british-spelling.js')
const americanToBritishTitles = require('./american-to-british-titles.js')
const britishOnly = require('./british-only.js')
const { invert, replaceAll, capitalize } = require('./helpers')

const americanToBritish = {
  ...americanOnly,
  ...americanToBritishSpelling,
}

const britishToAmerican = {
  ...britishOnly,
  ...invert(americanToBritish),
}

class Translator {
  /**
   * @param {string} text
   * @param {'american-to-british' | 'british-to-american'} locale
   * @returns Record<string, string>
   */
  _match(text, locale = 'american-to-british') {
    const lowerCased = text.toLowerCase()
    const arrayfied = lowerCased.split(' ')
    const matches = {}
    const words = locale === 'american-to-british' ? americanToBritish : britishToAmerican
    const wordsWithSpace = Object.fromEntries(Object.entries(words).filter(([key]) => key.includes(' ')))
    const honorificTitles = locale === 'american-to-british' ? americanToBritishTitles : invert(americanToBritishTitles)

    Object.entries(wordsWithSpace).forEach(([key, value]) => {
      if (lowerCased.includes(key)) {
        matches[key] = value
      }
    })

    Object.entries(honorificTitles).forEach(([key, value]) => {
      if (arrayfied.includes(key)) {
        matches[key] = capitalize(value)
      }
    })

    const regex = locale === 'american-to-british' ? /([1-9]|1[012]):[0-5][0-9]/g : /([1-9]|1[012]).[0-5][0-9]/g
    const separator = locale === 'american-to-british' ? ':' : '.'
    const replaceValue = separator === '.' ? ':' : '.'

    for (const [match] of lowerCased.matchAll(regex)) {
      matches[match] = match.replace(separator, replaceValue)
    }

    lowerCased.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach(word => {
      if (words[word]) {
        matches[word] = words[word]
      }
    })

    return matches
  }

  /**
   * @param {string} text
   * @param {'american-to-british' | 'british-to-american'} locale
   * @returns {string}
   */
  translate(text, locale = 'american-to-british') {
    const matches = this._match(text, locale)
    const translation = replaceAll(text, matches)

    return capitalize(translation)
  }

  /**
   * @param {string} text
   * @param {'american-to-british' | 'british-to-american'} locale
   * @returns {string}
   */
  translateWithHighlight(text, locale = 'american-to-british') {
    const matches = this._match(text, locale)
    const translation = capitalize(replaceAll(text, matches))
    const searchValues = Object.values(matches)
    const withHighlights = translation
      .split(' ')
      .map(word => (searchValues.includes(word.toLowerCase()) ? `<span class="highlight">${word}</span>` : word))
      .join(' ')

    return withHighlights
  }
}

module.exports = Translator
