// Create coordinates with spaces on by one
// move the Y value of the coordiates up and down
// connect each coordinate with one line

// class Point has X and Y values
export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = 0;
    this.max = Math.random() * 100 + 150;
  }

  // If update() is called, then they moves up and down
  // Use sine graph
  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
