'use strict'

const chalk = require('chalk')
const wordwrap = require('wordwrap')
const borders = require('./borders')

/**
 *  Repeat a [str] [count] times
 * @param  {String} str   String to repeat
 * @param  {Int} count [description]
 * @return {String}       [description]
 */
function repeat (str, count) {
  if (count < 0) return ''
  return new Array(count).join(str)
}

/**
 * [attention description]
 * @param  {[type]} message      [description]
 * @param  {[type]} borderChoice [description]
 * @param  {[type]} borderColor  [description]
 * @return {[type]}              [description]
 */
function attention (message, borderChoice, borderColor) {
  const border = borderChoice ? borders[borderChoice] || borderChoice
    : borders.none

  const styleFn = function (index) {
    const str = border[index] || border[0]
    return chalk[chalk[borderColor] ? borderColor : 'blue'].bold(str)
  }

  const topLeft = styleFn(0)
  const top = styleFn(1)
  const topRight = styleFn(2)
  const left = styleFn(3)
  const space = ' '
  const right = styleFn(5)
  const bottomLeft = styleFn(6)
  const bottom = styleFn(7)
  const bottomRight = styleFn(8)

  const screenWidth = (process.stdout.columns || 80) - 4
  const formattedMessage = [ '' ].concat(wordwrap(screenWidth - 8)(message).trim().split('\n')).concat('')
  const finalMessage = '\n' +
        '  ' + topLeft + repeat(top, screenWidth - 2) + topRight + '\n' +
        formattedMessage.map(function (lineOfMessage) {
          var lineOfMessageWidth = chalk.stripColor(lineOfMessage).length
          return '  ' + left + space + space + lineOfMessage + repeat(space, screenWidth - 2 - lineOfMessageWidth - 2) + right
        }).join('\n') + '\n' +
        '  ' + bottomLeft + repeat(bottom, screenWidth - 2) + bottomRight +
        '\n'

  return finalMessage
}

module.exports = attention
