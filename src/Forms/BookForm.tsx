import { observer } from 'mobx-react-lite';
import { Form, Button, Input, InputNumber, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useFormSubmission } from '@app/hooks';
import styles from './BookForm.module.scss';
import type { Dayjs } from 'dayjs';
import type { BookFormProps } from './BookForm.types';
import { useEffect } from 'react';
import dayjs from 'dayjs';

const BookForm: React.FC<BookFormProps> = observer(({ onNavigate, bookData }) => {
    const { formFields, setFormField, handleCreate, handleEdit, handleDelete } = useFormSubmission(bookData);
    const [form] = Form.useForm();

    useEffect(() => {
        if (bookData) {
            const date_fields = ['publishingYear'];
            for (const field of date_fields) {
                bookData[field] = bookData[field] ? dayjs(bookData[field]) : null;
            }

            form.setFieldsValue(bookData);
        }
    }, [bookData, form]);

    const onFinish = async () => {
        if (bookData) {
            handleEdit();
        } else {
            handleCreate();
        }

        onNavigate();
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            const fileList = e.slice(0, 1);
            return fileList;
        }
        return e && e.fileList;
    };

    const uploadProps = {
        name: 'file',
        fileList: formFields.image,
        beforeUpload: (file: File) => {
            if (formFields.image && formFields.image.length > 0) {
                // If an image is already present, prevent adding more
                return false;
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const thumbUrl = reader.result as string;
                setFormField('thumbUrl', thumbUrl);
            };
            return false;
        },
        onChange(info) {
            setFormField('image', info.fileList);
        },
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            className={styles.bookForm}>
            <Form.Item
                label={<label style={{ color: 'white' }}>Name</label>}
                name="name"
                rules={[{ required: true, message: 'Please enter the name' }]}
                className={styles.label}>
                <Input value={formFields.name} onChange={(e) => setFormField('name', e.target.value)} />
            </Form.Item>

            <Form.Item
                label={<label style={{ color: 'white' }}>Author</label>}
                name="author"
                rules={[{ required: true, message: 'Please enter the author' }]}>
                <Input value={formFields.author} onChange={(e) => setFormField('author', e.target.value)} />
            </Form.Item>

            <Form.Item
                label={<label style={{ color: 'white' }}>Publishing Year</label>}
                name="publishingYear"
                rules={[{ required: true, message: 'Please select the publishing year' }]}>
                <DatePicker
                    picker="year"
                    value={formFields.publishingYear as Dayjs | null}
                    onChange={(value) => setFormField('publishingYear', value)}
                />
            </Form.Item>

            <Form.Item label={<label style={{ color: 'white' }}>Genre</label>} name="genre">
                <Input value={formFields.genre} onChange={(e) => setFormField('genre', e.target.value)} />
            </Form.Item>

            <Form.Item
                label={<label style={{ color: 'white' }}>Number of Pages</label>}
                name="numberOfPages"
                rules={[{ required: true, message: 'Please enter the number of pages' }]}>
                <InputNumber
                    min={1}
                    value={formFields.numberOfPages}
                    onChange={(value) => setFormField('numberOfPages', value)}
                />
            </Form.Item>

            <Form.Item
                label={<label style={{ color: 'white' }}>Image</label>}
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}>
                <Upload {...uploadProps} listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item label={<label style={{ color: 'white' }}>Description</label>} name="description">
                <Input.TextArea
                    value={formFields.description}
                    onChange={(e) => setFormField('description', e.target.value)}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit" role="button">
                    {bookData ? 'Edit' : 'Submit'}
                </Button>
                {bookData && (
                    <Button
                        type="primary"
                        role="button"
                        danger
                        onClick={() => {
                            handleDelete(bookData.id);
                            onNavigate();
                        }}
                        style={{ marginLeft: 8 }}>
                        Delete
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
});

export default BookForm;
