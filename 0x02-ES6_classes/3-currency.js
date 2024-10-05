// Implement a class named Currency:
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter for _code
  get code() {
    return this._code;
  }

  // Setter for _code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for _name
  get name() {
    return this._name;
  }

  // Setter for _name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

