import React from 'react';

interface NewTodoFormState {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

export const NewTodoForm: React.FC<NewTodoFormState> = ({
  value,
  updateText,
  handleAction,
}) => {
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateText(e.target.value);
  };
  return (
    <label>
      <input placeholder="new todo" value={value} onChange={changeTitle} />
      <button onClick={handleAction}>Add Todo</button>
    </label>
  );
};
