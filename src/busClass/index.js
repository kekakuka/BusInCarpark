class Bus {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.f = 0;
  }

  place(x, y, f) {
    this.x = x;
    this.y = y;
    this.f = f;
  }

  left() {
    this.f = (this.f + 3) % 4;
  }

  right() {
    this.f = (this.f + 1) % 4;
  }

  move() {
    switch (this.f) {
      case 0:
        this.y + 1 <= 4 && this.y++;
        break;
      case 1:
        this.x + 1 <= 4 && this.x++;
        break;
      case 2:
        this.y - 1 >= 0 && this.y--;
        break;
      case 3:
        this.x - 1 >= 0 && this.x--;
        break;
    }
  }
  report(callback) {
    callback(`${this.x},${this.y},${getPosition(this.f)}`);
  }
  after(fn) {
    const self = this;
    return function(command, ...rest) {
      self[command](...rest);
      fn();
    };
  }
}

function getPosition(f) {
  switch (f) {
    case 0:
      return 'NORTH';
    case 1:
      return 'EAST';
    case 2:
      return 'SOUTH';
    case 3:
      return 'WEST';
  }
}

export default new Bus();
