interface UploadFileInfo {
    uid: string;
    name: string;
    status?: 'done' | 'uploading' | 'error' | 'removed';
    response?: string;
    url?: string;
    thumbUrl?: string;
    previewFile?: string | Blob;
    originFileObj?: File;
}

export type UploadFileList = UploadFileInfo[];
