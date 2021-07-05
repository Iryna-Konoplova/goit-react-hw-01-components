import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

const FriendListItem = ({url, name, isOnline}) => (
    <>
        <span className={`${styles.status} ${styles.online}`} ></span>
        <img className="avatar" src={url} alt={name} width="48" />
        <p className="name">{name}</p>
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