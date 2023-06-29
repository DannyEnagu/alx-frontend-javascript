export default class HolbertonCourse {
  constructor(name, length, students) {
    if (!(typeof name === 'string')) {
      throw new TypeError('Name must be a string');
    } else if (!(typeof length === 'number')) {
      throw new TypeError('length must be a number');
    } else if (!(students instanceof Array)) {
      throw new TypeError('students must be an array');
    } else {
      this._name = name; // eslint-disable-line
      this._length = length; // eslint-disable-line
      this._students = students; // eslint-disable-line
    }
  }

  get name() {
    return this._name; // eslint-disable-line
  }

  set name(value) {
    if (!(typeof value === 'string')) {
      throw new TypeError('Name must be a string');
    }
    this._name = value; // eslint-disable-line
  }

  get length() {
    return this._length; // eslint-disable-line
  }

  set length(value) {
    if (!(typeof value === 'number')) {
      throw new TypeError('length must be a number');
    }
    this._length = value; // eslint-disable-line
  }

  get students() {
    return this._students; // eslint-disable-line
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('students must be an array');
    }
    this._students = value; // eslint-disable-line
  }
}
