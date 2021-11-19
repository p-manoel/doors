import DoorModel from "../model/door";

export function createDoors(quantity: number, giftDoor: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, index) => {
    const number = index + 1;
    const hasGift = number === giftDoor;
    return new DoorModel(number, hasGift);
  })
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
  return doors.map(currentDoor => {
    const isModified = currentDoor.number === modifiedDoor.number;

    if(isModified) return modifiedDoor;
    else return modifiedDoor.opened ? currentDoor : currentDoor.unselect();
    
  })
}