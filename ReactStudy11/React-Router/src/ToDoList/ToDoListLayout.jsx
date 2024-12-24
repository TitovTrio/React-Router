import styles from './ToDoList.module.css';

export const ToDoListLayout = ({
	toDos,
	setToDos,
	addItem,
	refreshToDos,
	setRefreshToDos,
	isLoading,
	searchInput,
	setSearchInput,
	sortAlphabetOrder,
	sortButtonStatus,
	setSortButtonStatus,
	navigate,
	cutLongText,
}) => (
	<>
		<div className={styles.toDoListTitle}>Список дел</div>

		<button onClick={() => addItem(setRefreshToDos, refreshToDos)}>
			Добавить дело
		</button>
		<button
			onClick={() =>
				sortAlphabetOrder(
					sortButtonStatus,
					setSortButtonStatus,
					toDos,
					setToDos,
					refreshToDos,
					setRefreshToDos,
				)
			}
		>
			Сортировать по алфавиту
		</button>
		<label>Поиск: </label>
		<input
			type="text"
			value={searchInput}
			onChange={({ target }) => setSearchInput(target.value)}
		/>
		{isLoading ? (
			<div className={styles.loader}></div>
		) : (
			<ol>
				{toDos.map(({ id, title, content }) => {
					return (
						<li
							className={styles.toDoItem}
							key={id}
							onClick={() => navigate(`/ToDoItem/${id}`)}
						>
							<div className={styles.taskTitle}>{title}</div>
							<div className={styles.taskContent}>
								{cutLongText(content)}
							</div>
						</li>
					);
				})}
			</ol>
		)}
	</>
);
