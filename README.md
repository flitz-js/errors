[![npm](https://img.shields.io/npm/v/@flitz/errors.svg)](https://www.npmjs.com/package/@flitz/errors) [![supported flitz version](https://img.shields.io/static/v1?label=flitz&message=0.11.5%2B&color=blue)](https://github.com/flitz-js/flitz) [![last build](https://img.shields.io/github/workflow/status/flitz-js/errors/Publish)](https://github.com/flitz-js/errors/actions?query=workflow%3APublish) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/flitz-js/errors/pulls)

# @flitz/errors

> Creates an error handler for [flitz](https://github.com/flitz-js/flitz) with [pretty HTML output](https://github.com/poppinss/youch).

## Install

Run

```bash
npm install --save @flitz/errors
```

from the folder, where your `package.json` is stored.

## Usage

```javascript
const flitz = require('flitz');
const errors = require('@flitz/errors');

const run = async () => {
  const app = flitz();

  app.get('/', async (req, res) => {
    throw new ReferenceError('Oops! Something went wrong!');
  });

  app.setErrorHandler(errors());

  await app.listen(3000);
};

run();
```

Or the TypeScript way:

```typescript
import flitz from 'flitz';
import { errors } from '@flitz/errors';

const run = async () => {
  const app = flitz();

  app.get('/', async (req, res) => {
    throw new ReferenceError('Oops! Something went wrong!');
  });

  app.setErrorHandler(errors());

  await app.listen(3000);
};

run();
```

A possible result could be (the `Show all frames` was checked when took screenshot btw.):

![screenshot #1](./assets/screenshot.jpg)

## TypeScript

TypeScript is optionally supported. The module contains its own [definition files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## Credits

The module makes use of:

* [Youch!](https://github.com/poppinss/youch) by [Poppinss](https://github.com/poppinss)

## License

MIT © [Marcel Kloubert](https://github.com/mkloubert)
