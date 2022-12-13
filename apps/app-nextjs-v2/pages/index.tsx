import { useState, Fragment } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  ListGroup,
  ListGroupItem,
  Input,
} from 'reactstrap';
import { useDropzone } from 'react-dropzone';
import { FileText, X, DownloadCloud } from 'react-feather';
import Image from 'next/image';
import Link from 'next/link';
import { handleUpLoadFile } from '@nx-nextjs/api-services';
import { IResponseUpdateFile } from '@nx-nextjs/interfaces';

function FileUploaderMultiple() {
  const [files, setFiles] = useState([]);
  const [data, setData] = useState<IResponseUpdateFile>();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles.map((file) => Object.assign(file))]);
    },
  });

  const renderFilePreview = (file: File) => {
    if (file.type.startsWith('image')) {
      return (
        <Image
          className="rounded"
          alt={file.name}
          src={URL.createObjectURL(file)}
          height="28"
          width="28"
        />
      );
    } else {
      return <FileText size="28" />;
    }
  };

  const handleRemoveFile = (file: File) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };

  const renderFileSize = (size: number) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
    }
  };

  const fileList = files.map((file, index) => (
    <ListGroupItem
      key={`${file.name}-${index}`}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="file-details d-flex align-items-center">
        <div className="file-preview me-1">{renderFilePreview(file)}</div>
        <div>
          <p className="file-name mb-0">{file.name}</p>
          <p className="file-size mb-0">{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button
        color="danger"
        outline
        size="sm"
        className="btn-icon"
        onClick={() => handleRemoveFile(file)}
      >
        <X size={14} />
      </Button>
    </ListGroupItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const handleUpdateFile = () => {
    const formData = new FormData();
    formData.append('file', files.at(0));
    formData.append('upload_preset', 'xenuumuo');
    formData.append('cloud_name', 'ifv');

    handleUpLoadFile<IResponseUpdateFile>(formData, setData);
  };

  return (
    <Card className="p-4" style={{ height: '100vh' }}>
      <CardHeader>
        <CardTitle tag="h1">Public Image to Cloudinary</CardTitle>
      </CardHeader>
      <CardBody>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className="d-flex align-items-center justify-content-center flex-column">
            <DownloadCloud size={64} />
            <h5>Drop Files here or click to upload</h5>
            <p className="text-secondary">
              Drop files here or click
              <Link
                className="p-1"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                browse
              </Link>
              thorough your machine
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className="my-2">{fileList}</ListGroup>
            <div className="d-flex justify-content-end">
              <Button
                className="me-1"
                color="danger"
                outline
                onClick={handleRemoveAllFiles}
              >
                Remove All
              </Button>
              <Button onClick={handleUpdateFile} color="primary">
                Upload Files
              </Button>
            </div>
          </Fragment>
        ) : null}
        <p>
          {data?.original_filename}.{data?.format}
        </p>
        <div className="d-flex mt-2">
          <Input id="secure_url" value={data?.secure_url} disabled />
          <Button
            onClick={() => navigator.clipboard.writeText(data?.secure_url)}
          >
            Copy
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default FileUploaderMultiple;
