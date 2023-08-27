import React from 'react';
import { Stack, Card } from '@7shifts/sous-chef';
import styles from './login-layout-frame.scss';

type Props = {
    logo: React.ReactNode;
    marketingPane: React.ReactNode;
    formBackground?: string;
    children: React.ReactNode;
};

const LoginLayoutFrame = ({
    logo,
    marketingPane,
    formBackground = 'linear-gradient(235deg, #3a6d7c -8.99%, #2e7eed 85.7%)',
    children
}: Props) => {
    return (
        <div className={styles['login-layout-frame']}>
            <div
                className={styles['login-layout-frame__form']}
                style={{ background: formBackground }}
            >
                <div className={styles['login-layout-frame__form-content']}>
                    <div className={styles['login-layout-frame__logo']}>
                        {logo}
                    </div>
                    <Card>{children}</Card>
                </div>
            </div>
            <div className={styles['login-layout-frame__marketing']}>
                <Stack justifyContent="center" alignItems="center">
                    {marketingPane}
                </Stack>
            </div>
        </div>
    );
};
export default LoginLayoutFrame;
