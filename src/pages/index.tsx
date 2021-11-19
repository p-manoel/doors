import styles from "../../src/styles/Form.module.css";
import Card from "../../components/Card";
import Link from "next/link";
import NumberInput from "../../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [numberOfDoors, setNumberOfDoors] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(2);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Number of doors: " value={numberOfDoors} onChange={newNumberOfDoors => setNumberOfDoors(newNumberOfDoors)} />
        </Card>
      </div>
      <div>
        <Card >
          <NumberInput text="Door with gift: " value={doorWithGift} onChange={newDoorWithGift => setDoorWithGift(newDoorWithGift)}/>
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${numberOfDoors}/${doorWithGift}`} passHref>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
