import styles from './NotFound.module.css';
export const NotFound = () => (
	<div className={styles.errorBox}>
		<p className={styles.error}>404</p>
		<p className={styles.notFound}>не найдено</p>
	</div>
);
