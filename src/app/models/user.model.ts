export class User {
  constructor(
    public email: string,
    public roel: string,
    public id: number,
    public password: string,
    public nick: string,
    public name: string,
    public img?: string
  ) {}
}