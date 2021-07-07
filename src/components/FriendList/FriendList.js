// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Компоненты
import FriendListItem from './FriendListItem';

// Стили
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    <FriendList friends={friends} />,
  </ul>
);

// const FriendList = ({ friends }) => (
//     <ul className={styles.friendList}>
//         {friends.map((friend) => (   
//             <FriendListItem
//                 url={friend.avatar}
//                 name={friend.name}
//                 isOnline={friend.isOnline}
//                 idItem={friend.id}
//             />    
//         )
//         )}
//     </ul>
// );

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendList;