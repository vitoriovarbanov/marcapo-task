import styles from './CreateBook.module.scss';
import BookForm from '../../Forms/BookForm';
import { observer } from 'mobx-react-lite';
import store from '../../store/BookStore';

const CreateBook: React.FC = observer(() => {
    console.log(store.bookList);

    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.header}>Create New Book</h3>
            <BookForm />
        </div>
    );
});

export default CreateBook;
