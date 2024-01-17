import styles from './CreateBook.module.scss';
import BookForm from '../../Forms/BookForm';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../paths';

const CreateBook: React.FC = observer(() => {
    const navigate = useNavigate();

    const onAddNewBookNavigate = (): void => {
        navigate(paths.home);
    };

    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.header}>Create New Book</h3>
            <BookForm onAddNewBookNavigate={onAddNewBookNavigate} />
        </div>
    );
});

export default CreateBook;
