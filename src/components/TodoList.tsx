import { useAppSelector } from '../hooks/hook';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { list } = useAppSelector(({ todos }) => todos);
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
