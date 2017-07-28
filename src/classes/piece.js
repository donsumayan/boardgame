/* eslint-disable*/
export default class {
  constructor() {
    this.type = 'circle';
    this.team = null;
    this.x = null;
    this.y = null;
  }

  coordinates() {
    return { x: this.x,y: this.y};
  }

  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }
}

