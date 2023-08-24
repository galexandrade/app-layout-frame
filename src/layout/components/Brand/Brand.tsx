import React from 'react';
import { Avatar, Tooltip } from '@7shifts/sous-chef';
import styles from './brand.scss';

type Props = {
    companyLogoURL: string;
    companyName: string;
};

const Brand = ({ companyLogoURL, companyName }: Props) => {
    return (
        <div className={styles['brand']}>
            <div className={styles['brand__company-photo']}>
                <Avatar size="large" url={companyLogoURL} />
            </div>
            <Tooltip overlay="Company name">
                <span className={styles['brand__company-name']}>
                    {companyName}
                </span>
            </Tooltip>
        </div>
    );
};

export default Brand;
