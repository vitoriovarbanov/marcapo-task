import React from 'react';
import styles from './EditBook.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import bookStore from '../../store';
import BookForm from '../../Forms';
import { paths } from '../../paths';

const EditBook: React.FC = observer(() => {
    const { id } = useParams();
    const book = bookStore.getBookById(id);

    const navigate = useNavigate();

    const onNavigate = (): void => {
        navigate(paths.home);
    };

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.header}>Edit Book</h2>
            <BookForm bookData={book} onNavigate={onNavigate} />
        </div>
    );
});

export default EditBook;
