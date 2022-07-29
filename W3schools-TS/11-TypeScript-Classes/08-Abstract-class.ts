abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle4 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect1 = new Rectangle4(10,20);

console.log('area of rectangle is : ',myRect1.getArea());

// output
// area of rectangle is :  200