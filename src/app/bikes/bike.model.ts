export class Bike {
  public name: string;
  public description: string;
  public amount: number;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string, amount: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.amount = amount;
  }
}
