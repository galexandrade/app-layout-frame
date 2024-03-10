import React from 'react';
import styles from './notification-bullet.scss';

const NotificationBullet = (): JSX.Element => {
    return (
        <span
            className={styles['notification-bullet']}
            data-testid="notification-bullet"
        />
    );
};

export default NotificationBullet;
