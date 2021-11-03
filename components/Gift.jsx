import styles from "../src/styles/Gift.module.css";

export default function Gift() {
  return (
    <div className={ styles.gift }>
      <div className={ styles.top }></div>
      <div className={ styles.body }></div>
      <div className={ styles.ribbonX }></div>
      <div className={ styles.ribbonY }></div>
    </div>
  )
}