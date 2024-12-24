import { ToDoItemLayout } from './ToDoItemLayout';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRequestToDoItem } from './hooks';
import { changeItem, deleteItem } from './funcs';
import { NotFound } from '../404/NotFound';

export const ToDoItem = (title, content) => {
	const [isLoading, setIsLoading] = useState(false);
	const [refreshToDos, setRefreshToDos] = useState(false);
	const [currentItem, setCurrentItem] = useState('item');
	const id = useParams().id;
	const navigate = useNavigate();

	useRequestToDoItem(id, setCurrentItem, refreshToDos, setIsLoading);

	if (Object.keys(currentItem).length === 0) {
		return <NotFound />;
	}

	return (
		<ToDoItemLayout
			currentItem={currentItem}
			refreshToDos={refreshToDos}
			setRefreshToDos={setRefreshToDos}
			navigate={navigate}
			deleteItem={deleteItem}
			changeItem={changeItem}
		/>
	);
};
