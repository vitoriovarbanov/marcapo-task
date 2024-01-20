import { Table } from 'antd';
import type { Book } from '../../types';
import bookStore from '../../store';
import { observer } from 'mobx-react-lite';
import { columns } from './TableColumns';

const TableComponent: React.FC = observer(() => {
    const data = bookStore.bookList?.map((book: Book) => ({ ...book, key: book.id }));

    return <Table columns={columns} dataSource={data} scroll={{ x: 800, y: 340 }} />;
});

export default TableComponent;
