import React from 'react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './notification-badge.scss';

type Props = {
    children?: ReactNode;
};

const NotificationBadge = ({ children }: Props): JSX.Element => {
    return (
        <span
            className={classNames(styles['notification-badge'], {
                [styles['notification-badge--bullet']]: !children,
                [styles['notification-badge--count']]: children
            })}
            data-testid="notification-badge"
        >
            {children}
        </span>
    );
};

export default NotificationBadge;
