/**
 * Reverses object's key/value pairs
 *
 * @param {Record<string | number, any>} object
 * @return object
 */
const invert = object => {
  const output = {}

  Object.entries(object).forEach(([key, value]) => (output[value] = key))

  return output
}

/**
 * Replace all occurrences of every `dict`'s `key` with its `value`
 *
 * @param {string} str
 * @param {Record<string, string>} dict
 * @returns string
 */
const replaceAll = (str, dict) => {
  if (!Object.keys(dict).length) return str

  const regex = new RegExp(Object.keys(dict).join('|'), 'gi')
  const replacer = substring => dict[substring.toLowerCase()]

  return str.replace(regex, replacer)
}

/**
 * @param {string} str
 * @returns string
 */
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {
  invert,
  replaceAll,
  capitalize,
}
