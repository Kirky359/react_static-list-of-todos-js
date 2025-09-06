import { UserInfo } from '../UserInfo/UserInfo';
import users from '../../api/users.json';

export const TodoInfo = ({ todo }) => {
  const user = users.find(u => u.id === todo.userId);

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.completed && <UserInfo user={user} />}
    </article>
  );
};
