// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friends }) =>
  friends.map(({ friend }) => (
    <li key={friend.id} className={styles.item}>
      <span className={friend.isOnline ? styles.statusOnline : styles.status} />
      <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  )); 

// const FriendListItem = ({url, name, isOnline}) => (
//     <li className={styles.item} >
//         <span className={isOnline ? styles.statusOnline : styles.status} />
//         <img className={styles.avatar} src={url} alt={name} width="48" />
//         <p className={styles.name}>{name}</p>
//     </li>
// );

// FriendListItem.defaultProps = {
//     friend.avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
// };

// FriendListItem.propTypes = {
//     friend.avatar: PropTypes.string,
//     friend.name: PropTypes.string.isRequired,
//     friend.isOnline: PropTypes.bool.isRequired,
//     friend.id: PropTypes.number.isRequired
// };

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;