import React from 'react';
import Brand from '../Brand/Brand';
import MyAccountMenu from '../MyAccountMenu/MyAccountMenu';
import styles from './top-bar.scss';
import { Inline } from '@7shifts/sous-chef';

type Props = {
    companyLogoURL: string;
    companyName: string;
    actions: React.ReactNode[];
};
const TopBar = ({ companyLogoURL, companyName, actions }: Props) => {
    return (
        <div className={styles['top-bar']}>
            <div>
                <Brand
                    companyLogoURL={companyLogoURL}
                    companyName={companyName}
                />
            </div>
            <Inline space={24} alignItems="center">
                <Inline space={12} alignItems="center">
                    {actions}
                </Inline>
                <MyAccountMenu />
            </Inline>
        </div>
    );
};

export default TopBar;
