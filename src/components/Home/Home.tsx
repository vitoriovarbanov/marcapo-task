import styles from './Home.module.scss';
import { Button } from 'antd';

const Home: React.FC = () => {
    console.log(`HOMEE`);

    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.header}>Welcome to Marcapo Library</h2>
            <p className={styles.text}>There are no available books currently...</p>
            <Button type="primary" size="large" shape="round" onClick={() => console.log(`cliecked`)}>
                Add new book
            </Button>
        </div>
    );
};

export default Home;
