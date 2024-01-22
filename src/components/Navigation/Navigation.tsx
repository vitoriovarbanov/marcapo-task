import { Link, useLocation } from 'react-router-dom';
import { Anchor } from 'antd';
import { paths } from '@app/paths';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
    const location = useLocation();

    const isNotHomeComponent = location.pathname !== paths.home;

    return isNotHomeComponent ? (
        <div style={{ padding: '20px' }}>
            <Anchor style={{ color: 'white' }} direction="horizontal">
                <Anchor.Link key="home" href={paths.home} title="Home" className={styles.anchor}>
                    <Link to={paths.home} style={{ color: 'white', textDecoration: 'none' }}>
                        Home
                    </Link>
                </Anchor.Link>
            </Anchor>
        </div>
    ) : null;
};

export default Navigation;
