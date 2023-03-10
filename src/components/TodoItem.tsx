import React from 'react';
import { useAppDispatch } from '../hooks/hook';
import { toggleComplete, removeTodo } from '../redux/slices/todo-slice';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  const changeToggle = () => dispatch(toggleComplete(id));
  const removeTodoFn = () => dispatch(removeTodo(id));
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={changeToggle} />
      <span>{title}</span>
      <span onClick={removeTodoFn}>x</span>
    </li>
  );
};
