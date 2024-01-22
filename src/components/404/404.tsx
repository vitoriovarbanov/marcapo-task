import styles from './404.module.scss';

const NotFound: React.FC = () => (
    <div className={styles.container}>
        <h2>404 - Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
    </div>
);

export default NotFound;
