import styles from './CreateBook.module.scss';
import BookForm from '../../Forms/BookForm';
import { useNavigate } from 'react-router-dom';
import { paths } from '@app/paths';

const CreateBook: React.FC = () => {
    const navigate = useNavigate();

    const onNavigate = (): void => {
        navigate(paths.home);
    };

    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.header}>Create New Book</h3>
            <BookForm onNavigate={onNavigate} />
        </div>
    );
};

export default CreateBook;
