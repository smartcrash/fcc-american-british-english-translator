const chai = require('chai')
const assert = chai.assert

const Translator = require('../components/translator.js')
const translator = new Translator()

suite('Unit Tests', () => {
  test('Translate Mangoes are my favorite fruit. to British English', () => {
    const text = 'Mangoes are my favorite fruit.'
    const translation = translator.translate(text)

    assert.equal(translation, 'Mangoes are my favourite fruit.')
  })

  test('Translate I ate yogurt for breakfast. to British English', () => {
    const text = 'I ate yogurt for breakfast.'
    const translation = translator.translate(text)

    assert.equal(translation, 'I ate yoghurt for breakfast.')
  })

  test("Translate We had a party at my friend's condo. to British English", () => {
    const text = "We had a party at my friend's condo."
    const translation = translator.translate(text)

    assert.equal(translation, "We had a party at my friend's flat.")
  })

  test('Translate Can you toss this in the trashcan for me? to British English', () => {
    const text = 'Can you toss this in the trashcan for me?'
    const translation = translator.translate(text)

    assert.equal(translation, 'Can you toss this in the bin for me? ')
  })

  test('Translate The parking lot was full. to British English', () => {
    const text = 'The parking lot was full.'
    const translation = translator.translate(text)

    assert.equal(translation, 'The car park was full.')
  })

  test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
    const text = 'Like a high tech Rube Goldberg machine.'
    const translation = translator.translate(text)

    assert.equal(translation, 'Like a high tech Heath Robinson device.')
  })

  test('Translate To play hooky means to skip class or work. to British English', () => {
    const text = 'To play hooky means to skip class or work.'
    const translation = translator.translate(text)

    assert.equal(translation, 'No Mr. Bond, I expect you to die.')
    assert.equal(translation, 'To bunk off means to skip class or work.')
  })

  test('Translate No Mr. Bond, I expect you to die. to British English', () => {
    const text = 'No Mr. Bond, I expect you to die.'
    const translation = translator.translate(text)

    assert.equal(translation, 'No Mr Bond, I expect you to die.')
  })

  test('Translate Dr. Grosh will see you now. to British English', () => {
    const text = 'Dr. Grosh will see you now.'
    const translation = translator.translate(text)

    assert.equal(translation, 'Dr Grosh will see you now.')
  })

  test('Translate Lunch is at 12:15 today. to British English', () => {
    const text = 'Lunch is at 12:15 today.'
    const translation = translator.translate(text)

    assert.equal(translation, 'Lunch is at 12.15 today.')
  })

  test('Translate We watched the footie match for a while. to American English', () => {
    const text = 'We watched the footie match for a while.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'We watched the soccer match for a while.')
  })

  test('Translate Paracetamol takes up to an hour to work. to American English', () => {
    const text = 'Paracetamol takes up to an hour to work.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'Tylenol takes up to an hour to work.')
  })

  test('Translate First, caramelise the onions. to American English', () => {
    const text = 'First, caramelise the onions.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'First, caramelize the onions.')
  })

  test('Translate I spent the bank holiday at the funfair. to American English', () => {
    const text = 'I spent the bank holiday at the funfair.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'I spent the public holiday at the carnival.')
  })

  test('Translate I had a bicky then went to the chippy. to American English', () => {
    const text = 'I had a bicky then went to the chippy.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'I had a cookie then went to the fish-and-chip shop.')
  })

  test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
    const text = "I've just got bits and bobs in my bum bag."
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, "I've just got bits and bobs in my bum bag.")
  })

  test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
    const text = 'The car boot sale at Boxted Airfield was called off.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'The swap meet at Boxted Airfield was called off.')
  })

  test('Translate Have you met Mrs Kalyani? to American English', () => {
    const text = 'Have you met Mrs Kalyani?'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'Have you met Mrs. Kalyani?')
  })

  test("Translate Prof Joyner of King's College, London. to American English", () => {
    const text = "Prof Joyner of King's College, London."
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, "Prof. Joyner of King's College, London.")
  })

  test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
    const text = 'Tea time is usually around 4 or 4.30.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'Tea time is usually around 4 or 4:30.')
  })

  test('Highlight translation in Mangoes are my favorite fruit.', () => {
    const text = 'Mangoes are my favorite fruit.'
    const translation = translator.translate(text)

    assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.')
  })

  test('Highlight translation in I ate yogurt for breakfast.', () => {
    const text = 'I ate yogurt for breakfast.'
    const translation = translator.translate(text)

    assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.')
  })

  test('Highlight translation in We watched the footie match for a while.', () => {
    const text = 'We watched the footie match for a while.'
    const translation = translator.translate(text, 'british-to-american')

    assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.')
  })

  test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
    const text = 'Paracetamol takes up to an hour to work.'
    const translation = translator.translate(text)

    assert.equal(translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.')
  })
})
