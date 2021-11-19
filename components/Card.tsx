import styles from "../src/styles/Card.module.css";

interface CardProps {
  bgColor?: string
  children: any
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor: props.bgColor ?? "#fff" }}>
      {props.children}
    </div>
  )
}