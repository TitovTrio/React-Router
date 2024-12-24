export const addItem = (setRefreshToDos, refreshToDos) => {
	const itemTitle = prompt('Введите название дела:');
	const itemContent = prompt('Введите описание дела:');

	fetch('http://localhost:3000/toDos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			id: Math.floor(Math.random() * 100000),
			title: itemTitle,
			content: itemContent,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setRefreshToDos(!refreshToDos);
		});
};

export const changeItem = (id, setRefreshToDos, refreshToDos) => {
	const itemTitle = id && prompt('Введите новое название дела:');
	const itemContent = id && prompt('Введите новое описание дела:');

	fetch(`http://localhost:3000/toDos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			id: id,
			title: itemTitle,
			content: itemContent,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setRefreshToDos(!refreshToDos);
		});
};

export const deleteItem = (id, navigate, setRefreshToDos, refreshToDos) => {
	fetch(`http://localhost:3000/toDos/${id}`, {
		method: 'DELETE',
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setRefreshToDos(!refreshToDos);
			navigate(-1);
		});
};

export const sortAlphabetOrder = (
	sortButtonStatus,
	setSortButtonStatus,
	toDos,
	setToDos,
	refreshToDos,
	setRefreshToDos,
) => {
	setSortButtonStatus(!sortButtonStatus);
	!sortButtonStatus
		? setToDos(
				toDos.sort((a, b) => {
					let nameA = a.title.toLowerCase(),
						nameB = b.title.toLowerCase();
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				}),
			)
		: setRefreshToDos(!refreshToDos);
};

export const cutLongText = (text) => {
	if (text.length >= 100) {
		return text.substr(0, 100) + '...';
	} else {
		return text;
	}
};
