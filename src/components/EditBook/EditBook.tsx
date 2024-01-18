import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import bookStore from '../../store';
// import type { Book } from '../../types';
import BookForm from '../../Forms';
//import { useFormSubmission } from '../../hooks';

const EditBook: React.FC = observer(() => {
    const { id } = useParams();
    //const navigate = useNavigate();

    const book = bookStore.getBookById(id);

    // const handleSave = (): void => {
    //     const updatedBook = form.getFieldsValue() as Book;
    //     // Perform validation or additional logic if needed before saving
    //     bookStore.updateBook(id, updatedBook);
    //     message.success('Book details updated successfully!');
    //     navigate(paths.home);
    // };

    // const handleDelete = (): void => {
    //     bookStore.deleteBook(id);
    //     message.success('Book deleted successfully!');
    //     navigate(paths.home);
    // };

    return (
        <div>
            <h2>Edit Book</h2>
            <BookForm bookData={book} />
        </div>
    );
});

export default EditBook;
