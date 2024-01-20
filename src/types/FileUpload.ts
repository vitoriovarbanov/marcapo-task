import type { UploadFile, UploadFileStatus, RcFile } from 'antd/lib/upload/interface';
export interface ImageFile extends UploadFile {
    uid: string;
    name: string;
    status: UploadFileStatus;
    url?: string;
    originFileObj?: RcFile;
    thumbUrl?: string;
}
