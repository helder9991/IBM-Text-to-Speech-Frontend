import React, { useCallback, useEffect, useState } from 'react';

import Button from './components/Button/index';
import api from './service/api';

import { Container, Comentary, Left, Right } from './styles';

interface IAxiosCommentary {
  id: string;
  commentary: string;
  filename: string;
}

const App: React.FC = () => {
  const [commentaries, setCommentaries] = useState<IAxiosCommentary[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(Boolean);

  useEffect(() => {
    (async () => {
      const response = await api.get<IAxiosCommentary[]>('/commentary');

      if (response.status === 200) setCommentaries(response.data);
    })();
  }, []);

  // Da play no audio selecionado
  function handleListen(url: string): void {
    const audioElement = document.querySelector('audio');

    if (audioElement) {
      audioElement.src = url;
      audioElement.play();
    }
  }

  // Cadastra um commentario no banco de dados
  const handleRegister = useCallback(async (): Promise<void> => {
    setLoading(true);

    const response = await api.post<IAxiosCommentary>('/commentary', {
      commentary: inputText,
    });

    if (response.status === 200)
      setCommentaries(oldValue => [...oldValue, response.data]);

    setLoading(false);
  }, [inputText]);

  return (
    <Container>
      <Left>
        <h1>Comentario </h1>
        <textarea
          rows={10}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <Button loading={loading} onClick={handleRegister}>
          Cadastrar
        </Button>
      </Left>
      <Right>
        <h1>Comentarios</h1>
        <audio>Your browser does not support the audio element.</audio>
        {commentaries?.map(commentary => (
          <Comentary key={commentary.id}>
            <span>{commentary.commentary}</span>
            <Button onClick={() => handleListen(commentary.filename)}>
              Ouvir
            </Button>
          </Comentary>
        ))}
      </Right>
    </Container>
  );
};

export default App;
