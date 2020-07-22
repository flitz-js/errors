// Copyright 2020-present Marcel Joachim Kloubert <marcel.kloubert@gmx.net>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const youch = require('youch');
import { RequestErrorHandler } from 'flitz';

/**
 * Options for 'errors()' function.
 */
export interface ErrorsOptions {
  /**
   * A custom function, which resolve the HTTP status code for an error. Default: 500
   */
  getStatusCode?: (error: any) => number;
}

/**
 * Creates a new error handler.
 *
 * @param {ErrorsOptions} [ErrorsOptions] Custom options.
 * 
 * @returns {RequestErrorHandler} The new handler. 
 */
export function errors(options?: ErrorsOptions): RequestErrorHandler {
  let getStatusCode = options?.getStatusCode;
  if (!getStatusCode) {
    getStatusCode = () => 500;
  }

  return async (error, req, res) => {
    if (!res.headersSent) {
      res.setHeader('Content-type', 'text/html');
      res.writeHead(getStatusCode!(error));
    }

    res.write(await (new youch(error, req)).toHTML());
    res.end();
  };
}
