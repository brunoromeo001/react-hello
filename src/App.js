export default function App() {
  console.log('Teste no console do navegador');
  const name = 'Bruno Romeo'
  const age = '38'

  return (
    <>
      <header>
        <div className="bg-green-300 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Hello
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <p>
            O seu nome é {name}, com {name.length} caracteres, e você possui {age} anos
          </p>
        </div>
      </main>
    </>
  );
}
