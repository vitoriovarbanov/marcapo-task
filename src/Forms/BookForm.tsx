import { observer } from 'mobx-react-lite';
import { Form, Button, Input, InputNumber, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useFormSubmission } from '../hooks';
import styles from './BookForm.module.scss';

const BookForm: React.FC = observer(() => {
    const { formFields, setFormField, submitForm } = useFormSubmission();
    const [form] = Form.useForm();

    const onFinish = () => {
        submitForm();
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // replace with your upload URL
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
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
                <DatePicker picker="year" />
            </Form.Item>

            <Form.Item label={<label style={{ color: 'white' }}>Genre</label>} name="genre">
                <Input value={formFields.genre} onChange={(e) => setFormField('genre', e.target.value)} />
            </Form.Item>

            <Form.Item
                label={<label style={{ color: 'white' }}>Number of Pages</label>}
                name="numberOfPages"
                rules={[{ required: true, message: 'Please enter the number of pages' }]}>
                <InputNumber min={1} />
            </Form.Item>

            <Form.Item
                label={<label style={{ color: 'white' }}>Image</label>}
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}>
                <Upload {...uploadProps} listType="picture">
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
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
});

export default BookForm;
