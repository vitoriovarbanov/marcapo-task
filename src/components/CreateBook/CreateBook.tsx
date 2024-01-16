import styles from './CreateBook.module.scss';
import BookForm from '../../Forms/BookForm';

const CreateBook: React.FC = () => {
    console.log(`FORM`);

    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.header}>Create New Book</h3>
            <BookForm />
        </div>
    );
};

export default CreateBook;
