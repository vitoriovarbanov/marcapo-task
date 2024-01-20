import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { Button } from 'antd';
import { paths } from '../../paths';
import type { Book } from '../../types';
import bookStore from '../../store';
import { observer } from 'mobx-react-lite';
import TableComponent from '../Table';

const Home: React.FC = observer(() => {
    const navigate = useNavigate();

    const data = bookStore.bookList?.map((book: Book) => ({ ...book, key: book.id }));

    const handleAddNewBook = (): void => {
        navigate(paths.createBook);
    };

    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.header}>Welcome to Marcapo Library</h2>
            {!data.length ? (
                <p className={styles.text}>There are no available books currently...</p>
            ) : (
                <div className={styles.tableContainer}>
                    <TableComponent />
                </div>
            )}
            <Button type="primary" size="large" shape="round" onClick={handleAddNewBook}>
                Add new book
            </Button>
        </div>
    );
});

export default Home;
