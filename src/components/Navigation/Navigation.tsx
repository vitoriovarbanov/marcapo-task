// Navigation.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Anchor } from 'antd';
import { paths } from '../../paths';

const Navigation: React.FC = () => {
    const location = useLocation();

    const isNotHomeComponent = location.pathname !== paths.home;

    return isNotHomeComponent ? (
        <div style={{ padding: '20px' }}>
            <Anchor
                style={{ color: 'white' }}
                direction="horizontal"
                items={[
                    {
                        key: 'home',
                        href: '/',
                        title: 'Home',
                    },
                ]}
            />
        </div>
    ) : null;
};

export default Navigation;
