import { ToDoItem } from './ToDoList/ToDoItem';
import { ToDoList } from './ToDoList/ToDoList';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './404/NotFound';

export const App = () => (
	<>
		<Routes>
			<Route path="/" element={<ToDoList />} />
			<Route path="/ToDoItem/:id" element={<ToDoItem />}></Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</>
);
