export class User {

  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public age: number,
    public city: string,
  ) {

  }

  public copy() {
    return new User(this.id, this.name, this.surname, this.age, this.city);
  }
}
