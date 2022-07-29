// Override
// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.

// Example
interface Shape {
  getArea: () => number;
}

class Rectangle2 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle2[width=${this.width}, height=${this.height}]`;
  }
}

class Square1 extends Rectangle2 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle2
  public override toString(): string {
    return `Square1[width=${this.width}]`;
  }
}
const mySq1 = new Square(20);

console.log(mySq1.toString());

// output
// Square[width=20]