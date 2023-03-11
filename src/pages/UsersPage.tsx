import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { fetchUsers } from '../redux/slices/users-slice';

export const UsersPage = () => {
  const { list, loading, error } = useAppSelector(({ users }) => users);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(error);

  return (
    <div className="userpage">
      <h1>Users Page</h1>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        list.map((user) => (
          <div className="users" key={user.id}>
            <p>
              Name: <span>{user.name}</span>
            </p>
            <p>
              Username: <span>{user.username}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};
