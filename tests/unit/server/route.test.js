// eslint-disable-next-line import/no-extraneous-dependencies
import {
  jest,
  expect,
  describe,
  test,
  beforeEach,
} from '@jest/globals';
import config from '../../../server/config.js';
// import { handler } from '../../../server/routes.js';

const {
  pages,
} = config;

describe('#Routes - test site for api response', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test('GET / - should redirect to home page', async () => {

  });
  test.todo(`GET /home - should response with ${pages.homeHTML} file stream`);
  test.todo(`GET /controller - should response with ${pages.controllerHTML} file stream`);
  test.todo('GET /file.ext - should response with file stream');
  test.todo('GET /unknown - given an inexistent route it should response with 404');

  describe('exception', () => {
    test.todo('given inexistent file it should respond with 404');
    test.todo('given an error it should respond with 500');
  });
});
