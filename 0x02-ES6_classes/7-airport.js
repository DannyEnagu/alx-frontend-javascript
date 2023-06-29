export default class Airport {
  constructor(name, code) {
    this._name = name; // eslint-disable-line
    this._code = code; // eslint-disable-line
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`; // eslint-disable-line
  }

  toString() {
    return `[object ${this._code}]`; // eslint-disable-line
  }
}
