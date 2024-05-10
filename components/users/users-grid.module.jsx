import UserItem from "./user-item";
import classes from "./users-grid.module.css";

export default function UsersGrid({ users }) {
  return (
    <ul className={classes.meals}>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem {...user} />
        </li>
      ))}
    </ul>
  );
}
