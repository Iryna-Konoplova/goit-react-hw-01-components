import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
        {friends.map((friend) => (
            <li className={styles.item} key={friend.id}>
                <FriendListItem
                    url={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
        )
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendList;