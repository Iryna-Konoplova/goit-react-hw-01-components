// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './FriendListItem.module.css';


const FriendListItem = ({url, name, isOnline}) => (
    <>
        {isOnline ? <span className={styles.statusOnline} ></span> : <span className={styles.status} ></span>}
        <img className={styles.avatar} src={url} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </>
);

FriendListItem.defaultProps = {
    url: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
};

FriendListItem.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;