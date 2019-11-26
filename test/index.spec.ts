import { describe } from "mocha";
import Dotenvr from '../src';
import { assert } from 'chai';

describe('dotenvr', () => {
  it('parse-env', () => {
    const config = Dotenvr.load('.env', false);

    assert.deepEqual(
      config,
      {
        'APP': 'dotenvr demo',
        'I': {
          'am': {
            'teapot': 418
          }
        },
        'SPACE': 'got it',
        'STRING': '123',
        'STRING2': '123',
        'NUMBER': 123,
        'GOPATH': process.env.GOPATH,
        'ARR': ['a', 'b', 'c'],
        'BOOL_TRUE_1': true,
        'BOOL_TRUE_2': true,
        'BOOL_FALSE': false
      });
  });
});