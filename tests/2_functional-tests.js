const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const server = require('../server.js')

chai.use(chaiHttp)

suite('Functional Tests', () => {
  /*
  // You can POST to /api/translate with a body containing text with the text to
  // translate and locale with either american-to-british or british-to-american.
  // The returned object should contain the submitted text and translation with
  // the translated text.
  */
  test('Translation with text and locale fields: POST request to /api/translate', done => {
    const text = 'Paracetamol takes up to an hour to work.'
    const locale = 'british-to-american'
    const output = {
      text,
      translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.',
    }

    chai
      .request(server)
      .post('/api/translate')
      .send({ text, locale })
      .end(function (err, res) {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.deepEqual(res.body, output)

        done()
      })
  })

  /*
  // If locale does not match one of the two specified locales,
  // return { error: 'Invalid value for locale field' }.
  */
  test('Translation with text and invalid locale field: POST request to /api/translate', done => {
    const text = 'Paracetamol takes up to an hour to work.'
    const locale = 'invalid'
    const output = { error: 'Invalid value for locale field' }

    chai
      .request(server)
      .post('/api/translate')
      .send({ text, locale })
      .end(function (err, res) {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.deepEqual(res.body, output)

        done()
      })
  })

  /*
  // If one or more of the required fields is missing,
  // return { error: 'Required field(s) missing' }.
  */
  test('Translation with missing text field: POST request to /api/translate', done => {
    const text = undefined
    const locale = 'american-to-british'
    const output = { error: 'Required field(s) missing' }

    chai
      .request(server)
      .post('/api/translate')
      .send({ text, locale })
      .end(function (err, res) {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.deepEqual(res.body, output)

        done()
      })
  })

  test('Translation with missing locale field: POST request to /api/translate', done => {
    const text = 'Paracetamol takes up to an hour to work.'
    const locale = undefined
    const output = { error: 'Required field(s) missing' }

    chai
      .request(server)
      .post('/api/translate')
      .send({ text, locale })
      .end(function (err, res) {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.deepEqual(res.body, output)

        done()
      })
  })

  /*
 // If text is empty, return { error: 'No text to translate' }
 */
  test('Translation with empty text: POST request to /api/translate', done => {
    const text = ''
    const locale = 'american-to-british'
    const output = { error: 'No text to translate' }

    chai
      .request(server)
      .post('/api/translate')
      .send({ text, locale })
      .end(function (err, res) {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.deepEqual(res.body, output)

        done()
      })
  })

  /*
  // If text requires no translation, return "Everything looks good to me!" for the translation value.
  */
  test('Translation with text that needs no translation: POST request to /api/translate', done => {
    const text = 'Paracetamol takes up to an hour to work.'
    const locale = 'american-to-british'
    const output = { text, translation: 'Everything looks good to me!' }

    chai
      .request(server)
      .post('/api/translate')
      .send({ text, locale })
      .end(function (err, res) {
        assert.isNull(err)
        assert.equal(res.status, 200)
        assert.deepEqual(res.body, output)

        done()
      })
  })
})
