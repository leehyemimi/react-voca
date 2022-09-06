import Word from "./Word";
import styles from './Hello.module.scss'

function Hello() {
	return (
		<div className={styles.box}>
			Hello
			<Word />
		</div>
	);
}

export default Hello;