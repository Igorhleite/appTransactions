import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'
import { ThemeProvider} from 'styled-components'

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}



const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();
 
  async function handleUpload(): Promise<void> {
  const data = new FormData();

  if(!uploadedFiles.length) return
    const file = uploadedFiles[0]

    data.append('file', file.file, file.name)

    try {
      await api.post('/transactions/import', data);

      history.push('/')
    } catch (err) {
      console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }))

    setUploadedFiles(uploadFiles)

  }

  return (
    <>
      <Container>
        <Title>Import a transaction history</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Only CSV files are accepted
            </p>
            <button onClick={handleUpload} type="button">
              Submit
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
