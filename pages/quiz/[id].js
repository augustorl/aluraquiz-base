import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

// import { Container } from './styles';

function QuizDaGalera({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen externalQuestions={dbExterno.questions} externalBG={dbExterno.bg} />
      {/* <pre style={{ color: 'black' }}>
        {JSON.stringify(dbExterno.questions, null, 4)}
      </pre> */}
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((responstaConvertidaEmObjeto) => responstaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });
  return {
    props: {
      dbExterno,
    },
  };
}
export default QuizDaGalera;
