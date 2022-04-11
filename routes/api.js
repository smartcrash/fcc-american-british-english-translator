'use strict'

const { isDefined } = require('../components/helpers.js')
const Translator = require('../components/translator.js')

module.exports = function (app) {
  const translator = new Translator()

  app.route('/api/translate').post((req, res) => {
    const { text, locale } = req.body

    if (!isDefined(text) || !isDefined(locale)) {
      res.json({ error: 'Required field(s) missing' })
      return
    }

    if (text.trim() === '') {
      res.json({ error: 'No text to translate' })
      return
    }

    if (!['american-to-british', 'british-to-american'].includes(locale)) {
      res.json({ error: 'Invalid value for locale field' })
      return
    }

    const translation = translator.translateWithHighlight(text, locale)

    res.json({
      text,
      translation: translation === text ? 'Everything looks good to me!' : translation,
    })
  })
}
