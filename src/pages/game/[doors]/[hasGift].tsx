import styles from "../../../styles/Game.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Door from "../../../../components/Door";
import { createDoors, updateDoors } from "../../../../functions/doors";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const numberOfDoors = +router.query.doors;
    const doorWithGift = +router.query.hasGift;

    const numberOfDoorsIsValid = numberOfDoors >= 3 && numberOfDoors <=100;
    const doorWithGiftIsValid = doorWithGift >= 1 && doorWithGift <= numberOfDoors;

    setValid(numberOfDoorsIsValid && doorWithGiftIsValid);
  }, [router?.query])

  useEffect(() => {
    const numberOfDoors = +router.query.doors;
    const doorWithGift = +router.query.hasGift;

    if(numberOfDoors > 0 && numberOfDoors >= doorWithGift) {
      if(numberOfDoors >= doorWithGift) {
        setDoors(createDoors(numberOfDoors, doorWithGift));
      } else {
        alert("The door with gift non exist!")
      }
    }
  }, [router?.query])

  function renderDoors() {
    return valid && doors.map(door => {
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))}/>
    })
  }
  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
          <button>Restart game</button>
        </Link>
      </div>
    </div>
  )
}