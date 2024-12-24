import styles from './ToDoList.module.css';

export const ToDoItemLayout = ({
	currentItem,
	refreshToDos,
	setRefreshToDos,
	navigate,
	deleteItem,
	changeItem,
}) => (
	<div>
		<div className={styles.toDoListTitle}>Выбранное дело</div>
		<button onClick={() => navigate('/')}>Назад</button>
		<button
			onClick={() =>
				deleteItem(currentItem.id, navigate, setRefreshToDos, refreshToDos)
			}
		>
			Удалить дело
		</button>
		<button onClick={() => changeItem(currentItem.id, setRefreshToDos, refreshToDos)}>
			Изменить дело
		</button>

		<div className={styles.toDoItem}>
			<div className={styles.taskTitle}>{currentItem.title}</div>
			<div>{currentItem.content}</div>
		</div>
	</div>
);
