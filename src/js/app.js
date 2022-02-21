// TODO: write your code here

export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  add(numberError, strError) {
    this.error.set(numberError, strError);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
