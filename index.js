const chalk = require('chalk')
const attention = require('./lib/generate-message')

const examples = {
  'example-server-started': {
    options: {
      message: 'Server started: ' + chalk.underline.blue('http://localhost:8080/') + '',
      borderColor: 'bgBlue'
    }
  },
  'example-deploy-complete': {
    options: {
      message: chalk.green.bold('Files have been pushed to S3.') + '\n\n' + chalk.green('500 files uploaded successfully in 50 seconds.'),
      border: 'double',
      borderColor: 'bgGreen'
    }

  },
  'templated': {
    options: {
      message: 'This example is templated: <%= pkg.name %> by <%= pkg.author.name %>. It has no border setting.'
    }
  },
  'red-thin': {
    options: {
      message: 'This is border: thin, borderColor: red.',
      border: 'thin',
      borderColor: 'red'
    }
  },

  'red-double': {
    options: {
      message: 'This is border: double, borderColor: cyan.',
      border: 'double',
      borderColor: 'cyan'
    }
  },
  'blue-stacked': {
    options: {
      message: 'This is border: stacked, borderColor: blue.',
      border: 'stacked',
      borderColor: 'blue'
    }
  },
  'long-magenta-thick': {
    options: {
      message: 'This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. This is really long text with a bgMagenta background. ',
      borderColor: 'bgMagenta'
    }
  },
  'long-text-gray-comment': {
    options: {
      message: "This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. This is really long text with a 'comment' border that is gray. ",
      border: 'comment',
      borderColor: 'gray'
    }
  },
  'custom-box-!': {
    options: {
      message: "This is using border: '!' and borderColor: 'bgRed'.",
      border: '!',
      borderColor: 'bgRed'
    }
  },
  'too damn long': {
    options: {
      message: 'this_is_a_very_very_very_very_very_very_very_very_very_very_very_very_long_message',
      border: 'double',
      borderColor: 'bgGreen'
    }
  }
}

for (var example in examples) {
  if (examples.hasOwnProperty(example)) {
    console.log(attention(examples[example].options.message, examples[example].options.border, examples[example].options.borderColor))
  }
}
