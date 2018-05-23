# msg-attention

![server started](https://f.cloud.github.com/assets/51505/1282112/017bbcda-2f6e-11e3-9d36-8fadd1a7fa16.png)

> Display attention-grabbing messages in the terminal.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
    - [`message` _required_](#message-_required_)
    - [`border` _optional_](#border-_optional_)
    - [`borderColor` _optional_](#bordercolor-_optional_)
- [More examples](#more-examples)
- [Tests](#tests)
- [Contribute](#contribute)
- [Thanks to](#thanks-to)
- [License](#license)

## Background

Forked from [@dylang/grunt-attention](https://github.com/dylang/grunt-attention), as I needed to use it outside of Grunt.

## Install

```bash
npm install --save msg-attention
```

or

```bash
yarn add msg-attention
```

## Usage

```js

TODO

```

![files pushed](https://f.cloud.github.com/assets/51505/1282110/fd11ea48-2f6d-11e3-8aa3-099db5da6ac5.png)


## API

#### `message` _required_

Text to display.


#### `border` _optional_

Border style.

Included styles: `thin`, `double`, `stacked`, `comment`.

Single character repeated: Provide a single character and it will repeat it as the border such as `!` or `*`.

New style: Provide a 9-character string for all sides.  See `lib/borders.js` for examples.

#### `borderColor` _optional_

Color for the border.

Choices are: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`,
`bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`, `bgGray`.

Currently you can't set both the foreground and the background, that will be resolved in a future release.

## More examples

![examples](https://f.cloud.github.com/assets/51505/1282921/5cd6325a-2f7c-11e3-946a-b69f92a2180b.png)

## Tests
Run `npm test` to lint and run the tests.

## Contribute

See [the contribute file](contribute.md)!

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Thanks to

[@dylang](https://github.com/dylang) for the idea, the original package and for releasing both of them under the MIT license.

## License

[MIT © Giacomo Rossetto](../LICENSE)
