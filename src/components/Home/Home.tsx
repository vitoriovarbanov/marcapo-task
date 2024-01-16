import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { Button } from 'antd';
import { paths } from '../../paths';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleAddNewBook = (): void => {
        navigate(paths.createBook);
    };

    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.header}>Welcome to Marcapo Library</h2>
            <p className={styles.text}>There are no available books currently...</p>
            <Button type="primary" size="large" shape="round" onClick={handleAddNewBook}>
                Add new book
            </Button>
        </div>
    );
};

export default Home;
