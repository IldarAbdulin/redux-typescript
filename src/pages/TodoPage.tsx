import React from 'react';
import { useAppDispatch } from '../hooks/hook';

import { addTodo } from '../redux/slices/todo-slice';
import { NewTodoForm } from '../components/NewTodoForm';
import { TodoList } from '../components/TodoList';

export const TodoPage = () => {
  const [text, setText] = React.useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  };
  return (
    <>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </>
  );
};
