import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.frendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={css.item}>
            <span className={isOnline ? css.isOn : css.isOff}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            ></img>
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
