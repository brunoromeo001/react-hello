import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  console.log('Teste no console do navegador');

  const name = 'Bruno Romeo'
  const age = '38'

  return (
    <>
      <Header size='large'>
        Componente Header - React Hello
      </Header>

      <Main>
        <div className="container mx-auto p-4">
          <p>
            O seu nome é Bruno, com 11 caracteres, e você possui 38 anos
          </p>
        </div>
      </Main>
    </>
  );
}
