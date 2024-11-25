import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <>
      <Header size='large'>
        Componente Header - React Hello
      </Header>

      <Main>
        <input
          type='text'
          className="border"
        />
        <p>
          O seu nome é Bruno, com 11 caracteres, e você possui 38 anos
        </p>
      </Main>

    </>
  );
}

