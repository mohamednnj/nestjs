class UserService {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }
  greet() {
    console.log(`Greet name: ${this._name}`);
  }
}

const p1 = new UserService('SiRRi');
p1.greet();
