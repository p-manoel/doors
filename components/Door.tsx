import styles from '../src/styles/Door.module.css';
import DoorModel from '../model/door';
import Gift from './Gift';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selectedDoor = door.selected && !door.opened ? styles.selected : '';

  const alterSelection = event => props.onChange(door.alterSelection());
  const openDoor = event => {
    event.stopPropagation();
    props.onChange(door.openDoor());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.locker} onClick={openDoor}></div>
      </div>
    )
  }
  
  return (
    <div className={styles.area} onClick={alterSelection}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        {door.closed ?
          renderDoor() :
          door.hasGift ?
            <Gift /> :
            false}
      </div>
      <div className={styles.floor}></div>
    </div>
  )

}