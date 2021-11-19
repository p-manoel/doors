export default class DoorModel {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #opened: boolean;

  constructor(number: number, hasGift = false, selected = false, opened = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#opened = opened;
  }

  get number() {
    return this.#number;
  }
  
  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  get closed() {
    return !this.opened;
  }

  unselect() {
    const selected = false;
    return new DoorModel(this.number, this.hasGift, selected, this.opened);
  }

  alterSelection() {
    const selected = !this.#selected;
    return new DoorModel(this.number, this.hasGift, selected, this.opened);
  }

  openDoor() {
    const opened = true;
    return new DoorModel(this.number, this.hasGift, this.selected, opened);
  }
}