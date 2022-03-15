import { Service } from './service.js';

// eslint-disable-next-line import/prefer-default-export
export class Controller {
  constructor() {
    this.service = new Service();
  }

  async getFileStream(filename) {
    return this.service.getFileStream(filename);
  }
}
