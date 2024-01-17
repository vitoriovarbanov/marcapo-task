import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { Button, Table } from 'antd';
import { paths } from '../../paths';
import type { Book } from '../../types';
import bookStore from '../../store';
import { observer } from 'mobx-react-lite';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: 'Publishing Year',
        dataIndex: 'publishingYear',
        key: 'publishingYear',
    },
    {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre',
    },
    {
        title: 'Number of Pages',
        dataIndex: 'numberOfPages',
        key: 'numberOfPages',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (text: string) => <img src={text} alt="Book Cover" style={{ maxWidth: '50px', maxHeight: '50px' }} />,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record: Book) => <Link to={`/book-details/${record.id}`}>Details</Link>,
    },
];

const Home: React.FC = observer(() => {
    const navigate = useNavigate();

    const data = bookStore.bookList.map((book: Book) => ({ ...book, key: book.id }));

    console.log(data);

    const handleAddNewBook = (): void => {
        navigate(paths.createBook);
    };

    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.header}>Welcome to Marcapo Library</h2>
            <div className={styles.tableContainer}>
                <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
            </div>
            <p className={styles.text}>There are no available books currently...</p>
            <Button type="primary" size="large" shape="round" onClick={handleAddNewBook}>
                Add new book
            </Button>
        </div>
    );
});

export default Home;
