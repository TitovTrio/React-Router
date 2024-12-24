import { ToDoListLayout } from './ToDoListLayout';
import { useState } from 'react';
import { useRequestToDoList, useSearchInToDoList, useDebounce } from './hooks';
import { addItem, sortAlphabetOrder, cutLongText } from './funcs';
import { useNavigate } from 'react-router-dom';

export const ToDoList = () => {
	const [refreshToDos, setRefreshToDos] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [toDos, setToDos] = useState([]);
	const [sortButtonStatus, setSortButtonStatus] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const debouncedInput = useDebounce(searchInput, 300);
	const navigate = useNavigate();

	useRequestToDoList(setToDos, refreshToDos, setIsLoading);
	useSearchInToDoList(debouncedInput, toDos, setToDos, refreshToDos, setRefreshToDos);

	return (
		<ToDoListLayout
			toDos={toDos}
			setToDos={setToDos}
			addItem={addItem}
			refreshToDos={refreshToDos}
			setRefreshToDos={setRefreshToDos}
			isLoading={isLoading}
			searchInput={searchInput}
			setSearchInput={setSearchInput}
			sortAlphabetOrder={sortAlphabetOrder}
			sortButtonStatus={sortButtonStatus}
			setSortButtonStatus={setSortButtonStatus}
			navigate={navigate}
			cutLongText={cutLongText}
		/>
	);
};
