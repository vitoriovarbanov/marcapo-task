import { Link } from 'react-router-dom';
import type { Book } from '../../types';

export const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 50,
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
        render: (publishingYear: string) => {
            const dateObject = new Date(publishingYear);
            return dateObject.getFullYear();
        },
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
        render: (images: Array<{ thumbUrl: string }>) =>
            images.map((image, index) => (
                <img
                    key={index}
                    src={image.thumbUrl}
                    alt={`Book Cover ${index + 1}`}
                    style={{ maxWidth: '50px', maxHeight: '50px' }}
                />
            )),
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: string, record: Book) => <Link to={`/edit-book/${record.id}`}>Details</Link>,
    },
];
