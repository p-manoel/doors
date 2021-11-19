import styles from "../src/styles/NumberInput.module.css";

interface NumberInputProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function NumberInput(props) {
  const decrease = () => {
    if(props.value > 1) props.onChange(props.value - 1);
  }
  const increase = () => props.onChange(props.value + 1);


  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{ props.text }</span>
      <span className={styles.value}>{ props.value }</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrease}>-</button>
        <button className={styles.button} onClick={increase}>+</button>
      </div>
    </div>
  )
}